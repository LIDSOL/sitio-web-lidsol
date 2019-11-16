---
title: "Etiquetador gramatical (POS) usando Conditional Random Fields"
subtitle: "Una brevísima introducción al etiquetado POS usando aprendizaje estructurado con CRFs"
summary: "Una brevísima introducción al etiquetado POS usando aprendizaje estructurado con CRFs"
authors:
- umoqnier
tags: ["nlp", "crf", "pos"]
categories: []
math: true

image:
  preview_only: false
---

## Introducción

### Etiquetado gramatical

En lingüistica computacional el etiquetado gramatical o *Part of Speech (POS)* 
se refiere al proceso de asignar a cada palabra de un texto su categoría
gramatical. Para el correcto etiquetado se hace uso de la definición de la
palabra y del contexto al que pertenece. La complejidad de esta tarea aumenta
en lenguas naturales ya que las palabras pueden tener distintas categorías
gramaticales en función del contexto en el que aparecen. Por ejemplo, la
palabra 'dado' puede referirse a un nombre singular o a una forma del verbo
'dar'.

En este artículo se creará un etiquetador POS usando el método
probabilístico llamado *Conditional Random Fields (CRFs)*. Los CRFs tratan de
modelar una distribución condicional de probabilidad $P(y\|x)$. Además del
etiquetado POS, los CRFs se pueden utilizar para otros tipos de etiquetado
de secuencias como Named Entity Recognizers (NER).

### Conditional Random Fields

En CRFs, la entrada es un conjunto de *features* (números reales) derivados de
las llamadas *feature functions* . Con los pesos asociados a las *features*,
que son aprendidos, junto con la etiqueta anterior se buscan predecir la
etiqueta siguiente. Los pesos de las diferentes *feature functions* serán
determinados de tal manera que la probabilidad de las etiquetas en los datos
de entrenamiento sea maximizada.

Un conjunto de *feature functions* es definido para extraer *features*
para cada palabra en una oración. Algunos ejemplos de *feature functions*
son los siguientes:

*  Si la primera letra de la palabra es mayúscula
*  Cuál es el sufijo y prefijo de la palabra
*  Es la primera o la última palabra de la oración
*  Es un número

Este conjunto de características es llamado **State Features**. También,
se pasan las etiquetas de las palabras previas y la etiqueta de la palabra
actual para aprender los pesos. CRF tratará de determinar los pesos de
diferentes *feature functions* que maximizarán la probabilidad de las
etiquetas de los datos de entrenamiento. La *feature functions* que depende
de la etiqueta de la palabra previa es llamada **Transition Feature**.

A continuación se mostrará cómo utilizar CRF para la identificación de
las etiquetas POS en `python`.

## Preparando el ambiente de desarrollo

### Instalando bibliotecas para usar CRFs

Se requieren las bibliotecas de `nltk`, `sklearn` y `sklearn-crfsuite`.

```python
!pip install nltk
!pip install sklearn
!pip install sklearn-crfsuite
```

### Descargando dataset

```python
import nltk


nltk.download('universal_tagset')
nltk.download('treebank')
```

## ¿Qué contiene el dataset?

Se utilizará el dataset de *NLTK Treebank* con el *Universal Tagset*. El
[Universal Tagset de NLTK](https://www.nltk.org/_modules/nltk/tag/mapping.html)
comprende 12 clases de etiquetas que son las que se listan a continuación. Las
etiquetas y las palabras con en *inglés*.

* Verbo - *Verb*
* Sustantivo - *Noun*
* Pronombres - *Pronoun*
* Adjetivos - *Adjectives*
* Adverbios - *Adverbs*
* Adposiciones - *Adpositions*
* Conjunciones - *Conjunctios*
* Determinantes - *Determiners*
* Números Cardinales - *Cardinal Numbers*
* Partículas - *Particles*
* Otro/Palabras extranjeras - *Other/Fereign Words*
* Puntuaciones - *Punctuations*

Este dataset tiene 3,914 sentencias etiquetadas y un vocabulario (palabras
no repetidas) de 12,408 palabras.

```python
tagged_sentence = nltk.corpus.treebank.tagged_sents(tagset='universal')
print("Número de sentencias etiquetadas: ", len(tagged_sentence))
tagged_words=[tup for sent in tagged_sentence for tup in sent]
print("Total de palabras etiquetadas: ", len(tagged_words))
vocab=set([word for word,tag in tagged_words])
print("Vocabulario del Corpus: ", len(vocab))
tags=set([tag for word,tag in tagged_words])
print("Número de etiquetas del Corpus: ", len(tags))
print("\nEjemplo de sentencia etiquetada:")
print("'" + " ".join([t[0] for t in tagged_sentence[0]]) + "'")
for t in tagged_sentence[0]:
  print('{:>12} -> {:>5}'.format(t[0], t[1]))
```

    Número de sentencias etiquetadas:  3914
    Total de palabras etiquetadas:  100676
    Vocabulario del Corpus:  12408
    Número de etiquetas del Corpus:  12

    Ejemplo de sentencia etiquetada:
    'Pierre Vinken , 61 years old , will join the board as a nonexecutive director Nov. 29 .'
          Pierre ->  NOUN
          Vinken ->  NOUN
               , ->     .
              61 ->   NUM
           years ->  NOUN
             old ->   ADJ
               , ->     .
            will ->  VERB
            join ->  VERB
             the ->   DET
           board ->  NOUN
              as ->   ADP
               a ->   DET
    nonexecutive ->   ADJ
        director ->  NOUN
            Nov. ->  NOUN
              29 ->   NUM
               . ->     .

## Preprocesamiento de datos

### Separando el conjunto de entrenamiento y de test
Se separará el conjunto de entrenamiento y el de test con una relación
80:20 siguiendo el
[principio de pareto](https://en.wikipedia.org/wiki/Pareto_principle).

```python
from sklearn.model_selection import train_test_split


train_set, test_set = train_test_split(tagged_sentence, test_size=0.2,
                                       random_state=1234)
print("Número de sentencias en los datos de entrenamiento ", len(train_set))
print("Número de sentencias en los datos de test ", len(test_set))
```

    Número de sentencias en los datos de entrenamiento  3131
    Número de sentencias en los datos de test  783


### Creando las *feature functions*

Para la correcta identificación de las etiquetas POS, se tiene que crear
una función que retorne un diccionario con las siguientes características
para cada palabra en una sentencia:

*   ¿La primera letra de la palabra está en mayúsculas? (Generalmente
    los nombres propios tienen la primer letra en mayúsculas
*   ¿Es la primer palabra de la sentencia?
*   ¿Es la última palabra de la sentencia?
*   ¿Contiene la palabra números y letras?
*   ¿La palabra contiene guiones? (generalmente en inglés, los **adjetivos**
    contienen guiones -. Por ejemplo, las palabras  fast-growing y slow-moving)
*   ¿Está la palabra completamente en mayúsculas?
*   ¿Es un número?
*   ¿Cuáles son los primeros cuatro sufijos y prefijos? (Palabras en ingles
    que terminan con "ed" son generalmente **verbos**, palabras que terminan con
    "ous" como *disastrous* con **adjetivos**)

La *feature function* es definida abajo y se extraen las características
para el entrenamiento y el test.

```python
import re


def features(sentence, index):
    """
    :param list sentence: Es una lista de palabras [w1,w2,w3,..]
    :param int index: Es la posición de la plabra en la sentencia
    :return: dict con las features para el entrenamiento
    """
    return {
        'is_first_capital': int(sentence[index][0].isupper()),
        'is_first_word': int(index == 0),
        'is_last_word': int(index == len(sentence) - 1),
        'is_complete_capital': int(sentence[index].upper() == sentence[index]),
        'prev_word': '' if index == 0 else sentence[index-1],
        'next_word': '' if index == len(sentence) - 1 else sentence[index+1],
        'is_numeric': int(sentence[index].isdigit()),
        'is_alphanumeric': int(bool((re.match('^(?=.*[0-9]$)(?=.*[a-zA-Z])',
                                              sentence[index])))),
        'prefix_1': sentence[index][0],
        'prefix_2': sentence[index][:2],
        'prefix_3': sentence[index][:3],
        'prefix_4': sentence[index][:4],
        'suffix_1': sentence[index][-1],
        'suffix_2': sentence[index][-2:],
        'suffix_3': sentence[index][-3:],
        'suffix_4': sentence[index][-4:],
        'word_has_hyphen': 1 if '-' in sentence[index] else 0
         }


def untag(sentence):
    """
    :param list sentence: Lista de palabras con etiquetas de la forma
    [(w1, t1), (w2, t2), ...]
    :return: Una lista de palabras sin etiquetas
    """
    return [word for word, tag in sentence]


def prepare_data(tagged_sentences):
    """
    :params list tagged_sentences: Lista de palabras con etiquetas de la forma
    [(w1, t1), (w2, t2), ...]
    :return list X: Diccionarios con las features para el modelo
    :return list y: Etiquetas por sentencias
    """
    X, y = [], []
    for sentences in tagged_sentences:
        X.append([features(untag(sentences), index)
                  for index in range(len(sentences))])
        y.append([tag for word,tag in sentences])
    return X, y
```

### Creación de entrenamiento y test para modelado

```python
X_train, y_train = prepare_data(train_set)
X_test, y_test = prepare_data(test_set)
```

Viendo las primeras cinco palabras de la primera sentencia

```python
X_train[0][:5]
```
    [{'is_first_capital': 1,
      'is_first_word': 1,
      'is_last_word': 0,
      'is_complete_capital': 0,
      'prev_word': '',
      'next_word': 'Wall',
      'is_numeric': 0,
      'is_alphanumeric': 0,
      'prefix_1': 'O',
      'prefix_2': 'On',
      'prefix_3': 'On',
      'prefix_4': 'On',
      'suffix_1': 'n',
      'suffix_2': 'On',
      'suffix_3': 'On',
      'suffix_4': 'On',
      'word_has_hyphen': 0},
     {'is_first_capital': 1,
      'is_first_word': 0,
      'is_last_word': 0,
      'is_complete_capital': 0,
      'prev_word': 'On',
      'next_word': 'Street',
      'is_numeric': 0,
      'is_alphanumeric': 0,
      'prefix_1': 'W',
      'prefix_2': 'Wa',
      'prefix_3': 'Wal',
      'prefix_4': 'Wall',
      'suffix_1': 'l',
      'suffix_2': 'll',
      'suffix_3': 'all',
      'suffix_4': 'Wall',
      'word_has_hyphen': 0},
     {'is_first_capital': 1,
      'is_first_word': 0,
      'is_last_word': 0,
      'is_complete_capital': 0,
      'prev_word': 'Wall',
      'next_word': 'men',
      'is_numeric': 0,
      'is_alphanumeric': 0,
      'prefix_1': 'S',
      'prefix_2': 'St',
      'prefix_3': 'Str',
      'prefix_4': 'Stre',
      'suffix_1': 't',
      'suffix_2': 'et',
      'suffix_3': 'eet',
      'suffix_4': 'reet',
      'word_has_hyphen': 0},
     {'is_first_capital': 0,
      'is_first_word': 0,
      'is_last_word': 0,
      'is_complete_capital': 0,
      'prev_word': 'Street',
      'next_word': 'and',
      'is_numeric': 0,
      'is_alphanumeric': 0,
      'prefix_1': 'm',
      'prefix_2': 'me',
      'prefix_3': 'men',
      'prefix_4': 'men',
      'suffix_1': 'n',
      'suffix_2': 'en',
      'suffix_3': 'men',
      'suffix_4': 'men',
      'word_has_hyphen': 0},
     {'is_first_capital': 0,
      'is_first_word': 0,
      'is_last_word': 0,
      'is_complete_capital': 0,
      'prev_word': 'men',
      'next_word': 'women',
      'is_numeric': 0,
      'is_alphanumeric': 0,
      'prefix_1': 'a',
      'prefix_2': 'an',
      'prefix_3': 'and',
      'prefix_4': 'and',
      'suffix_1': 'd',
      'suffix_2': 'nd',
      'suffix_3': 'and',
      'suffix_4': 'and',
      'word_has_hyphen': 0}]

Primeras cinco etiquetas de la primera sentencia

```python
y_train[0][:5]
```

    ['ADP', 'NOUN', 'NOUN', 'NOUN', 'CONJ']

## Configurando el modelo de CRF

Terminado el preprocesamiento del dataset se usará la biblioteca
de `sklearn_crfsuite` para la creación del modelo. El modelo es
optimizado por el **Gradiente Descendente** usando el método de
**[L-BFGS](https://en.wikipedia.org/wiki/Limited-memory_BFGS)**
con  regularización
**[Elastic Net L1 + L2](https://en.wikipedia.org/wiki/Elastic_net_regularization)**.
Se configurará el modelo para generar todas las transiciones posibles de
etiquetas, incluso aquellas que no ocurren en los datos de entrenamiento.

```python
from sklearn_crfsuite import CRF
crf = CRF(
    algorithm='lbfgs',
    c1=0.01,
    c2=0.1,
    max_iterations=100,
    all_possible_transitions=True
)
```

## Entrenamiento

```python
crf.fit(X_train, y_train)
```

    CRF(algorithm='lbfgs', all_possible_states=None, all_possible_transitions=True,
        averaging=None, c=None, c1=0.01, c2=0.1, calibration_candidates=None,
        calibration_eta=None, calibration_max_trials=None, calibration_rate=None,
        calibration_samples=None, delta=None, epsilon=None, error_sensitive=None,
        gamma=None, keep_tempfiles=None, linesearch=None, max_iterations=100,
        max_linesearch=None, min_freq=None, model_filename=None, num_memories=None,
        pa_type=None, period=None, trainer_cls=None, variance=None, verbose=False)

## Evaluación

Se utilizará *F-score* para evaluar el modelo de CRF. *F-score* es un
balance entre
[*Precision y Recall*](https://en.wikipedia.org/wiki/Precision_and_recall)
y está definido como:

```
f-score = 2*((precision * recall) / (precision + recall))
```

*Precision* está definido como el número de  **verdaderos positivos (TP)**
entre el **número total de predicciones positivas (TP + FP)**. También es
conocido como *Positive Predictive Value (PPV)*.

```
presicion = TP / (TP + FP)
```

*Recall* está definido como el número total de **verdaderos positivos
(TP)** entre el total de **valores de clase postivos (TP + FN)**. También
es conocido como *Sensitivity* o *True Positive Rate*.

```
recall = TP / (TP + FN)
```

```python
from sklearn_crfsuite import metrics
from sklearn_crfsuite import scorers


y_pred = crf.predict(X_test)
print("F-score del test data ")
print(metrics.flat_f1_score(y_test, y_pred, average='weighted',
                            labels=crf.classes_))
print("F-score en datos de Entrenamiento ")
y_pred_train = crf.predict(X_train)
print(metrics.flat_f1_score(y_train, y_pred_train, average='weighted',
                            labels=crf.classes_))
```
    F-score del test data
    0.9738471726864286
    F-score en datos de Entrenamiento
    0.9963402924209424

Del puntaje de clase del CRF, se observa que para predecir Adjetivos *(ADJ)*,
los resultados de la evaluación, *precision*, *recall* y *F-score*, son
bajos. Esto quiere decir que **se deben agregar más *CRF feature functions*
relacionadas con adjetivos**.

```python
print(metrics.flat_classification_report(
    y_test, y_pred, labels=crf.classes_, digits=3
))
```

                  precision    recall  f1-score   support

             ADP      0.979     0.985     0.982      1869
            NOUN      0.966     0.977     0.972      5606
            CONJ      0.994     0.994     0.994       480
            VERB      0.964     0.960     0.962      2722
             ADJ      0.911     0.874     0.892      1274
               .      1.000     1.000     1.000      2354
               X      1.000     0.997     0.998      1278
             NUM      0.991     0.993     0.992       671
             DET      0.994     0.995     0.994      1695
             ADV      0.927     0.909     0.918       585
            PRON      0.998     0.998     0.998       562
             PRT      0.979     0.982     0.980       614

        accuracy                          0.974     19710
       macro avg      0.975     0.972     0.974     19710
    weighted avg      0.974     0.974     0.974     19710

Se observan el total de *Transition Features* y el top 20 de las más
probables. Por ejemplo, la primera transición muestra que **si se tiene un
Adjetivo es muy probable la siguiente palabra será un sustantivo, un verbo
es mas probable que sea seguido por una partícula (como *TO*)**.

```python
from collections import Counter


print("Total de Transition Features", len(crf.transition_features_))
print("Top 20")
Counter(crf.transition_features_).most_common(20)
```

    Total de Transition Features 144
    Top 20
    [(('ADJ', 'NOUN'), 4.114996),
     (('NOUN', 'NOUN'), 2.935448),
     (('NOUN', 'VERB'), 2.891987),
     (('VERB', 'PRT'), 2.519179),
     (('X', 'VERB'), 2.271558),
     (('ADP', 'NOUN'), 2.265833),
     (('NOUN', 'PRT'), 2.172849),
     (('PRON', 'VERB'), 2.117186),
     (('NUM', 'NOUN'), 2.059221),
     (('DET', 'NOUN'), 2.053832),
     (('ADV', 'VERB'), 1.994419),
     (('ADV', 'ADJ'), 1.957063),
     (('NOUN', 'ADP'), 1.838684),
     (('VERB', 'NOUN'), 1.763319),
     (('ADJ', 'ADJ'), 1.660578),
     (('NOUN', 'CONJ'), 1.591359),
     (('PRT', 'NOUN'), 1.398473),
     (('NOUN', '.'), 1.381863),
     (('NOUN', 'ADV'), 1.380086),
     (('ADV', 'ADV'), 1.301282)]

También se observan el total de *state features* y las más comunes. Se
observa que cuando las palabras inmediatamente anteriores son *will* o
*would*, es probable que sean un verbo, o si una palabra termina con *ed*,
probablemente será un verbo. A su vez, si una palabra contiene un guión,
la probabilidad de que sea un adjetivo aumenta. Por último, si la palabra
tiene la primera letra en mayúsculas, probablemente será un sustantivo.

```python
print("Total de State Features ",len(crf.state_features_))
Counter(crf.state_features_).most_common(20)
```

    Total de State Features  32413
    [(('prev_word:will', 'VERB'), 6.751359),
     (('prev_word:would', 'VERB'), 5.940819),
     (('prefix_1:*', 'X'), 5.830558),
     (('suffix_4:rest', 'NOUN'), 5.644523),
     (('suffix_2:ly', 'ADV'), 5.260228),
     (('is_first_capital', 'NOUN'), 5.043121),
     (('prev_word:could', 'VERB'), 5.018842),
     (('suffix_3:ous', 'ADJ'), 4.870949),
     (('prev_word:to', 'VERB'), 4.849822),
     (('suffix_4:will', 'VERB'), 4.677684),
     (('next_word:appeal', 'ADJ'), 4.386434),
     (('prev_word:how', 'PRT'), 4.35094),
     (('suffix_4:pany', 'NOUN'), 4.329975),
     (('prefix_4:many', 'ADJ'), 4.205028),
     (('prev_word:lock', 'PRT'), 4.153643),
     (('word_has_hyphen', 'ADJ'), 4.151036),
     (('prev_word:tune', 'PRT'), 4.147576),
     (('next_word:Express', 'NOUN'), 4.137127),
     (('suffix_4:food', 'NOUN'), 4.116688),
     (('suffix_2:ed', 'VERB'), 4.070659)]

## Conclusiones

En este artículo, se aprendió a utilizar CRF para construir un etiquetador
POS para el inglés. Con un enfoque similar se puede utilizar para crear
NERs usando CRF. Las *feature functions* son determinantes para mejorar el
rendimiento del modelo y en ese sentido es conveniente identificar cuales
son más adecuadas acorde con la lengua que se analiza. Por ejemplo, puede
ser conveniente ver las dos últimas palabras de la sentencia en lugar de
solo la previa, o las dos siguientes, etc. Este artículo está fuertemente
basado en el
[artículo](https://medium.com/analytics-vidhya/pos-tagging-using-conditional-random-fields-92077e5eaa31)
de [Aiswarya Ramachandran](https://medium.com/@aiswaryar).

## Referencias
* [Universal Tagset de NLTK](https://www.nltk.org/_modules/nltk/tag/mapping.html)
* [Principio de pareto](https://en.wikipedia.org/wiki/Pareto_principle)
* [L-BFGS](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* [Elastic net regularization](https://en.wikipedia.org/wiki/Elastic_net_regularization)
* [Precision y Recall](https://en.wikipedia.org/wiki/Precision_and_recall)
* [POS using conditional random fields](https://medium.com/analytics-vidhya/pos-tagging-using-conditional-random-fields-92077e5eaa31)

---

**`Este es el primer artículo de una serie recién nacida. Cualquier
recomendación, comentario o felicitación es bien recibida. Tus comentarios
nos ayudan a mejorar`**
