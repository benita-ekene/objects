/*Question1

Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 
*/

function InstagramPost(AuthorHandle, Content, ImageLink, NumberOfViews, NumberOfLikes) {
  this.AuthorHandle = "@author";
  this.Content = Content;
  this.ImageLink = ImageLink;
  this.NumberOfViews = NumberOfViews;
  this.NumberOfLikes = NumberOfLikes;
  }

  /*
  Question2

  Create 2 Instagram post objects from the constructor function you created above
  */

let post1 = new InstagramPost("post1", "DevOps Blog", "instapost/devops.com", 150000000, 160000,);
let post2 = new InstagramPost("post2", "Cybersecurity and Datascience", "instapost/cybersafe.com", 20000000, 14000);
console.log(post1);
console.log(post2);

/* Question3
Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination: ○ ENG - 70 ○ GOVT - 85 ○ LIT - 82 ○ CRK - 94

a) Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.
*/

function createPerson(name, age, location) {
  return {
    name: name, 
    age: age,
    location: location,
  };
}

let Musa = createPerson("Musa Dawodu", "19 years", "Nigerian")
console.log(Musa);

/* 
b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
*/

function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

let JAMB_scores = createJambScores(65, 50, 70, 66);
console.log(JAMB_scores);

Musa.JAMB_scores = (65 + 50 + 70 + 66);
console.log(Musa);

/* 
4. What are the different ways you can clone an object? Give examples for each of them.

Ways of cloning objects include:
===============================

a.) Using Object.assign()
Example:
*/
let Scores = {
  eng: 45,
  govt: 75,
  lit: 67,
  crk: 80,
};

const CurrentScore = Object.assign({}, Scores);
CurrentScore.eng = 90;
console.log(CurrentScore);

// b.)  Using spread syntax

const RecentScore = {...Scores};
RecentScore.govt = 50;
console.log(RecentScore);

// c.) Using the method JSON.parse(JSON.stringify())
const MostRecentScore = JSON.parse;
MostRecentScore.eng = 70;
console.log({MostRecentScore});


/* 
Using any of the enumeration methods taught in class (for…in or for..of), log out each of the presidential candidates in this format: ’Omoyele Sowore is the presidential candidate of AAC’
*/
const presidentialCandidates = { 
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
}

for (const key in presidentialCandidates) {
console.log(presidentialCandidates[key] + " is the presidential candidate of " + key);
}

