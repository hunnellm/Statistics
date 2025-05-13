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
  "body": " Introduction  Data is all around us and plays an increasingly important role in our lives. Our goal in this course is to understand the role data plays in our lives, and more importantly how data helps us make better decisions in our lives.  Whether we are at work, coaching a child's team, or advocating for a policy change to the local government, using data provides a more rigorous approach to decision-making.  "
},
{
  "id": "sec-examples",
  "level": "1",
  "url": "sec-examples.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some Examples",
  "body": " Some Examples  We are going to take a look at some of the interesting places data is applied in the real world. The advent of modern computation has enabled us to use large datasets.    Social Media   Some social media companies   logos for some of the largest social media companies      Professional Sports   Some sports teams using data   logos for some of the sports teams using data      Big Tech Firms    Hospitals     Many, many, many more       Here's a theorem with     The proof is trivial.    "
},
{
  "id": "social-media-logos",
  "level": "2",
  "url": "sec-examples.html#social-media-logos",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Some social media companies   logos for some of the largest social media companies   "
},
{
  "id": "sports-logos",
  "level": "2",
  "url": "sec-examples.html#sports-logos",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Some sports teams using data   logos for some of the sports teams using data   "
},
{
  "id": "thm-temp",
  "level": "2",
  "url": "sec-examples.html#thm-temp",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "",
  "body": "  Here's a theorem with     The proof is trivial.   "
},
{
  "id": "sec-individuals",
  "level": "1",
  "url": "sec-individuals.html",
  "type": "Section",
  "number": "1.3",
  "title": "Individuals and Variables",
  "body": " Individuals and Variables  We need to agree on some terminology for how we talk about data.   WARNING: Some of these terms are universal across different textbooks, some are not.    The individuals for a dataset are the collection of objects on whom we record measurements.      The variables are the features of the individuals that we record. They can be people, things, or more abstract concepts.    Admittedly, these definitions are a bit vague, but that allows them to apply in lots of situations. Let's make things more concrete with some specific examples.   Here's an example with people    Here's the solution       Here's an example with objects     Here's the solution      Here's an example with abstract things    Here's the solution      Here's a table with some data in it    Cat. 1  45  55  60    Cat. 2 45  55  60      "
},
{
  "id": "def-individuals",
  "level": "2",
  "url": "sec-individuals.html#def-individuals",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  The individuals for a dataset are the collection of objects on whom we record measurements.   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-individuals.html#def-",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  The variables are the features of the individuals that we record. They can be people, things, or more abstract concepts.   "
},
{
  "id": "sec-individuals-7",
  "level": "2",
  "url": "sec-individuals.html#sec-individuals-7",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " Here's an example with people    Here's the solution    "
},
{
  "id": "sec-individuals-8",
  "level": "2",
  "url": "sec-individuals.html#sec-individuals-8",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Here's an example with objects     Here's the solution    "
},
{
  "id": "sec-individuals-9",
  "level": "2",
  "url": "sec-individuals.html#sec-individuals-9",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": " Here's an example with abstract things    Here's the solution    "
},
{
  "id": "sec-individuals-10",
  "level": "2",
  "url": "sec-individuals.html#sec-individuals-10",
  "type": "Table",
  "number": "1.3.6",
  "title": "Here’s a table with some data in it",
  "body": " Here's a table with some data in it    Cat. 1  45  55  60    Cat. 2 45  55  60    "
},
{
  "id": "sec-variables",
  "level": "1",
  "url": "sec-variables.html",
  "type": "Section",
  "number": "1.4",
  "title": "Kinds of Variables",
  "body": " Kinds of Variables  We also need to make some distinctions between different kinds of variables. The reason is that we need different tools to interpret different kinds of data. For example, it makes sense to do mathematical operations, like taking an average, on numerical data values, like the heights of brothers. However, how would we take the average of the title of the brothers' favorite books?  Clearly we need different tools to make conclusions about these two fundamentally different kinds of variables. Let's formally define them. Warning: Some textbooks distinguish between many more kinds of variables. We will divide variables into only two types to keep focused on the most important ideas in statistics.    If a variable takes values that are numbers, and it makes sense to do mathematical operations on these numbers, the variable is called quantitative .      If a variables values are not numbers, or are numbers that it doesn't make sense to do mathematical operations on, the variable is called categorical .        f(x)=2.5-x^2\/2  a = 1       (a,f(a))       the caption             "
},
{
  "id": "def-quantitative",
  "level": "2",
  "url": "sec-variables.html#def-quantitative",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  If a variable takes values that are numbers, and it makes sense to do mathematical operations on these numbers, the variable is called quantitative .   "
},
{
  "id": "def-categorical",
  "level": "2",
  "url": "sec-variables.html#def-categorical",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  If a variables values are not numbers, or are numbers that it doesn't make sense to do mathematical operations on, the variable is called categorical .   "
},
{
  "id": "image-test-fig",
  "level": "2",
  "url": "sec-variables.html#image-test-fig",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": "    f(x)=2.5-x^2\/2  a = 1       (a,f(a))       the caption  "
},
{
  "id": "sec-variables-7",
  "level": "2",
  "url": "sec-variables.html#sec-variables-7",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "         "
},
{
  "id": "sec-pictures-normal",
  "level": "1",
  "url": "sec-pictures-normal.html",
  "type": "Section",
  "number": "2.1",
  "title": "Normal Distributions",
  "body": " Normal Distributions  Here's a picture of a normal distribution   "
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
