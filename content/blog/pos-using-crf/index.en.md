---
title: "Part-of-Speech (POS) Tagger Using Conditional Random Fields"
excerpt: "A very brief introduction to POS tagging using structured learning with CRFs"
authors: ["umoqnier"]
date: "2020-07-12"
readTime: "5 min"
tags:
  - "nlp"
  - "crf"
  - "pos"
---

## Introduction

### Part-of-Speech Tagging

In computational linguistics, part-of-speech (POS) tagging refers to the process of assigning each word in a text its grammatical category. For correct tagging, both the definition of the word and the context in which it appears are taken into account. The complexity of this task increases in natural languages because words can have different grammatical categories depending on the context in which they appear. For example, the word “given” can refer to a noun or to a form of the verb “to give.”

In this article, we will create a POS tagger using the probabilistic method called *Conditional Random Fields (CRFs)*. CRFs aim to model a conditional probability distribution $P(y\|x)$. In addition to POS tagging, CRFs can be used for other types of sequence labeling tasks such as Named Entity Recognition (NER).

### Conditional Random Fields

In CRFs, the input is a set of *features* (real numbers) derived from so-called *feature functions*. With the associated weights of the *features*, which are learned during training, and together with the previous label, the model attempts to predict the next label. The weights of the different *feature functions* are determined in such a way that the probability of the labels in the training data is maximized.

A set of *feature functions* is defined to extract *features* for each word in a sentence. Some examples of *feature functions* are:

* Whether the first letter of the word is uppercase
* What the suffix and prefix of the word are
* Whether it is the first or the last word in the sentence
* Whether it is a number

This set of characteristics is called **State Features**. Additionally, the labels of the previous words and the label of the current word are passed in order to learn the weights. CRF will attempt to determine the weights of different *feature functions* that maximize the probability of the labels in the training data. The *feature function* that depends on the previous word’s label is called a **Transition Feature**.

Below, we will show how to use CRF for POS tag identification in `python`.

## Preparing the Development Environment

### Installing Libraries to Use CRFs

The required libraries are `nltk`, `sklearn`, and `sklearn-crfsuite`.

```python
!pip install nltk
!pip install sklearn
!pip install sklearn-crfsuite
```

### Downloading the Dataset

```python
import nltk

nltk.download('universal_tagset')
nltk.download('treebank')
```

## What Does the Dataset Contain?

We will use the *NLTK Treebank* dataset with the *Universal Tagset*.

This dataset contains 3,914 tagged sentences and a vocabulary (unique words) of 12,408 words.

```python
tagged_sentence = nltk.corpus.treebank.tagged_sents(tagset='universal')
print("Number of tagged sentences: ", len(tagged_sentence))
```

## Data Preprocessing

### Splitting the Training and Test Sets

```python
from sklearn.model_selection import train_test_split

train_set, test_set = train_test_split(tagged_sentence, test_size=0.2,
                                       random_state=1234)
```

### Creating the Feature Functions

```python
import re

def features(sentence, index):
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
```

## Configuring the CRF Model

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

## Training

```python
crf.fit(X_train, y_train)
```

## Evaluation

```
f-score = 2*((precision * recall) / (precision + recall))
```

```python
from sklearn_crfsuite import metrics

y_pred = crf.predict(X_test)
print(metrics.flat_f1_score(y_test, y_pred, average='weighted',
                            labels=crf.classes_))
```

## Conclusions

In this article, we learned how to use CRF to build a POS tagger for English. The feature functions are crucial for improving model performance.

---

**`This is the first article in a newly born series. Any recommendation, comment, or congratulations is welcome.`**

