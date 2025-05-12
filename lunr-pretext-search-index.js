var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-data-intro",
  "level": "1",
  "url": "sec-data-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  Text of section.  "
},
{
  "id": "sec-examples",
  "level": "1",
  "url": "sec-examples.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some Examples",
  "body": " Some Examples  Text of section.  "
},
{
  "id": "sec-individuals",
  "level": "1",
  "url": "sec-individuals.html",
  "type": "Section",
  "number": "1.3",
  "title": "Individuals and Variables",
  "body": " Individuals and Variables  Text of section.  "
},
{
  "id": "sec-variables",
  "level": "1",
  "url": "sec-variables.html",
  "type": "Section",
  "number": "1.4",
  "title": "Kinds of Variables",
  "body": " Kinds of Variables  Text of section.  "
},
{
  "id": "ch-pictures",
  "level": "1",
  "url": "ch-pictures.html",
  "type": "Chapter",
  "number": "2",
  "title": "Picturing Distributions",
  "body": " Picturing Distributions   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-descriptive",
  "level": "1",
  "url": "ch-descriptive.html",
  "type": "Chapter",
  "number": "3",
  "title": "Describing Distributions with Numbers",
  "body": " Describing Distributions with Numbers   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-sampling",
  "level": "1",
  "url": "ch-sampling.html",
  "type": "Chapter",
  "number": "4",
  "title": "Sampling",
  "body": " Sampling   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-probability",
  "level": "1",
  "url": "ch-probability.html",
  "type": "Chapter",
  "number": "5",
  "title": "Probability",
  "body": " Probability   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-sampling-distributions",
  "level": "1",
  "url": "ch-sampling-distributions.html",
  "type": "Chapter",
  "number": "6",
  "title": "Sampling Distributions",
  "body": " Sampling Distributions   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-hypothesis-tests",
  "level": "1",
  "url": "ch-hypothesis-tests.html",
  "type": "Chapter",
  "number": "7",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "ch-confidence-intervals",
  "level": "1",
  "url": "ch-confidence-intervals.html",
  "type": "Chapter",
  "number": "8",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals   Let's get started by looking at the fundamental thing we study in the course, data.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
