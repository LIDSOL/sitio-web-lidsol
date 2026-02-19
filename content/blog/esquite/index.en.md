---
title: Esquite
subtitle: "A *framework* for managing parallel corpora"
summary: We present the Esquite framework designed for people who want to manage a parallel corpus
authors: ["umoqnier"]
tags:
  - "nlp"
  - "parallel corpus"
  - "elotl"
  - "django"
  - "python"
  - "free software"
  - "indigenous languages"
categories: []
date: 2020-07-13
lastmod: 2020-07-13
featured: false
draft: false
image:
  caption: "Elotl Community logo"
  focal_point: "Smart"
  preview_only: true
projects: []
---

## Elotl Community

Being part of LIDSoL has allowed me to meet and collaborate with other communities doing outstanding work. [Elotl Community](https://elotl.mx/) is one of them.

Elotl is a collaborative, non-profit project dedicated to the creation of free (of course :heart:) and open digital tools aimed at preserving and promoting Mexican indigenous languages. They also seek to bring this topic into the national agenda and conduct academic research in this area.

Elotl’s core focus is **linguistic diversity** and building technology for that diversity. Mexico has 11 linguistic families divided into 68 distinct linguistic groups, which in turn encompass 364 variants (almost one variant for each day of the year :astonished:).

## What is Esquite?

Besides being a delicious cup of corn kernels with mayonnaise, cheese, and spicy chili, it is also one of the projects LIDSoL has collaborated on. [**Esquite**](https://github.com/ElotlMX/Esquite) is a free software *framework* intended for people who own parallel corpora (bilingual texts) and want a web system that allows them to upload, manage, and search for words or phrases within their corpora.

The software is built with `django` (another web development *framework* written in `python` :snake:) and uses `elasticsearch` as its search engine and document management system.

An example use case of the *framework* is the parallel corpus [TSU̱NKUA](https://tsunkua.elotl.mx/), which allows users to consult digitized and aligned bilingual documents from different Otomí variants. At the time of writing, the corpus contains approximately `5519` parallel lines across `6` different documents.

{{< figure src="tsunkua.png" title="Tsunkua Parallel Corpus" lightbox="true" >}}

To enrich searches, the web platform includes filtering by dialectal variant. In addition, the search engine supports special operators for advanced queries. Some of them are listed below:

* **Fuzzy search** (`~`): Includes words with orthographic similarity in the results. For example, if you search for: `jamadi~`, the results will include `jämadi`, `dabadi`, `juadi`, `jamfri`, etc.
* **Wildcard** (`*`): Replaces zero or more characters. Example: `mexic*`
* **Single-character wildcard** (`?`): Replaces a single character. Example: `nin?s`

A feature especially designed for researchers or people who want to experiment with search results is the ability to export results in `.csv` format. For more information, check the [help section](https://tsunkua.elotl.mx/ayuda/) of the website.

{{< figure src="export_csv.png" title="Button to export results" lightbox="true" >}}

## You convinced me, give me 2

Alright, since you insist, let’s see what we need to install our shiny parallel corpus *framework*. The required software is:

### Dependencies

* `git`
* `python3.6` or a newer version
    * `virtualenv`: virtual environments for `python` packages
* `elasticsearch 7.6` or newer

### Installation

#### 0. Install and run `elasticsearch`

You can consult the official [Elasticsearch installation guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) to complete this step.

#### 1. Clone the [Esquite repository](https://github.com/ElotlMX/Esquite)

```shell
user@machine:~$ git clone https://github.com/ElotlMX/Esquite.git
```

#### 2. Prepare the environment

Enter the Esquite directory, create a virtual environment, and activate it[^1]:

```shell
user@machine:~$ cd Esquite/
user@machine:~/Esquite$ virtualenv env
user@machine:~/Esquite$ source env/bin/activate
```

#### 3. Install dependencies

```shell
(env)user@machine:~/Esquite$ pip install -r requeriments.txt
```

#### 4. Configuration wizard :dizzy:

The project requires a configuration file. This file is automatically created using a wizard powered by *Deep Learning* (just kidding).

Run the wizard with:

```shell
(env)user@machine:~/Esquite$ python wizard.py
```

The wizard will ask for several platform details such as the organization name, project name, first and second corpus languages, etc.

It also mentions that an `elasticsearch` index must exist for the web platform to function properly. To create the index with the required configurations[^2], run:

```shell
$ curl -X PUT -H "Content-Type: application/json" -d @elastic-config.json localhost:9200/<your-index-name>
```

#### 6. Run the application

```shell
(env)user@machine:~/Esquite$ python manage.py runserver
```

If we go to `localhost:8000/` in our browser, we should see something like this:

{{< figure src="galagar.png" title="Galagar Parallel Corpus" lightbox="true" >}}

You can customize elements such as page colors, project collaborators, social media links, and the page banner (which we modified for this example). Customization will be covered in detail in another post ;)

## Administration

The system includes a document administrator at `localhost:8000/corpus-admin/` where we can add new documents, view them, add new lines to existing documents, and delete them. We can also view the variants present in the corpus and create backups in `csv` format.

{{< figure src="admin.png" title="Document administrator" lightbox="true" >}}

It looks a bit sad because our system is empty. We need to feed it with parallel texts :book:.

## Feed me, human :robot:

{{< figure src="sin_rostro.gif" title="No-Face from Spirited Away" lightbox="true" >}}

Click on "New Document", add the document name, upload the aligned corpus `csv` file, and an associated `pdf` file.

The `csv` file format is as follows:

| l1 | l2 | variant |
|----|----|---------|
| Once a woman got drunk | xu̱tu̱ bimáyóhthó 'á ngŭ ra bésíno | Otomí from the State of Mexico (ots) |
| Then she went to sleep at the neighbor’s house | nándi na ra t'u̱xú bintí | Otomí from the State of Mexico (ots) |
| After she fell asleep | despwés ya biyóbí | Otomí from the State of Mexico (ots) |

The file must include a header[^3]. The first column is text in Spanish, the second column is the second language (Otomí in this example), and the third column[^4] is the variant (if available).

{{< figure src="upload.png" title="Uploading a document" lightbox="true" >}}

{{< figure src="docs.png" title="Document list" lightbox="true" >}}

## Let’s test it

{{< figure src="busqueda1.png" title="Results for search *amor*" lightbox="true" >}}

{{< figure src="busqueda2.png" title="Results for search *amor~*" lightbox="true" >}}

## Conclusions

* Since this *framework* is free software, you are allowed to view, modify, study, and redistribute your modifications to the source code. The code is available in the previously mentioned [repository](https://github.com/ElotlMX/Esquite/).
* If you enjoy programming and are interested in language technologies, the Elotl Community welcomes contributions to this and other platforms. Send your *Pull Requests* :D
* If programming is not your thing or not your field of study, you can still collaborate by:
    * Research :microscope:: Some members of the Elotl Community can supervise or advise theses, mainly within UNAM.
    * Outreach :satellite:: Share relevant information with the community so it can be disseminated.
    * Donations :gift:: All tools are free, and to continue development the community constantly seeks donations.
    * You can check all collaboration options at [this link](https://elotl.mx/como-colaborar/).

[^1]: Make sure `python3` is your system’s default with `python --version`. If you have `python2.7`, you can run `virtualenv env -p /usr/bin/python3`.
[^2]: The `elastic-config.json` file comes with the cloned repository :p
[^3]: The header is mandatory since the first line of the file is ignored by default.
[^4]: If the variant does not exist, the column **must still exist** but remain empty.
