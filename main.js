//Lesson Contents

const vowels = [
  { nepali: "अ", english: "a", sound: "a.mp3", image: "a.png" },
  { nepali: "आ", english: "aa", sound: "aa.mp3", image: "aa.png" },
  { nepali: "इ", english: "i", sound: "i.mp3", image: "i.png" },
  { nepali: "ई", english: "ee", sound: "ee.mp3", image: "ee.png" },
  { nepali: "उ", english: "u", sound: "u.mp3", image: "u.png" },
  { nepali: "ऊ", english: "oo", sound: "oo.mp3", image: "oo.png" },
  { nepali: "ए", english: "eh", sound: "eh.mp3", image: "eh.png" },
  { nepali: "ऐ", english: "aih", sound: "aih.mp3", image: "aih.png" },
  { nepali: "ओ", english: "o", sound: "o.mp3", image: "o.png" },
  { nepali: "औ", english: "au", sound: "au.mp3", image: "au.png" },
  { nepali: "अं", english: "ahm", sound: "ahm.mp3", image: "ahm.png" },
  { nepali: "अ:", english: "aha", sound: "aha.mp3", image: "aha.png" }
];
const roots = [
  { nepali: "क", english: "ka", sound: "ka.mp3", image: "ka.png" },
  { nepali: "ख", english: "kha", sound: "kha.mp3", image: "kha.png" },
  { nepali: "ग", english: "ga", sound: "ga.mp3", image: "ga.png" },
  { nepali: "घ", english: "gha", sound: "gha.mp3", image: "gha.png" },
  { nepali: "ङ", english: "nga", sound: "nga.mp3", image: "nga.png" },
  { nepali: "च", english: "cha", sound: "cha.mp3", image: "cha.png" },
  { nepali: "छ", english: "chha", sound: "chha.mp3", image: "chha.png" },
  { nepali: "ज", english: "ja", sound: "ja.mp3", image: "ja.png" },
  { nepali: "झ", english: "jha", sound: "jha.mp3", image: "jha.png" },
  { nepali: "ञ", english: "yan", sound: "yan.mp3", image: "yan.png" },
  { nepali: "ट", english: "ta", sound: "ta.mp3", image: "ta.png" },
  { nepali: "ठ", english: "tha", sound: "tha.mp3", image: "tha.png" },
  { nepali: "ड", english: "da", sound: "da.mp3", image: "da.png" },
  { nepali: "ढ", english: "dha", sound: "dha.mp3", image: "dha.png" },
  { nepali: "ण", english: "nna", sound: "nna.mp3", image: "nna.png" },
  { nepali: "त", english: "tta", sound: "tta.mp3", image: "tta.png" },
  { nepali: "थ", english: "ttha", sound: "ttha.mp3", image: "ttha.png" },
  { nepali: "द", english: "dda", sound: "dda.mp3", image: "dda.png" },
  { nepali: "ध", english: "ddha", sound: "ddha.mp3", image: "ddha.png" },
  { nepali: "न", english: "na", sound: "na.mp3", image: "na.png" },
  { nepali: "प", english: "pa", sound: "pa.mp3", image: "pa.png" },
  { nepali: "फ", english: "pha", sound: "pha.mp3", image: "pha.png" },
  { nepali: "ब", english: "ba", sound: "ba.mp3", image: "ba.png" },
  { nepali: "भ", english: "bha", sound: "bha.mp3", image: "bha.png" },
  { nepali: "म", english: "ma", sound: "ma.mp3", image: "ma.png" },
  { nepali: "य", english: "ya", sound: "ya.mp3", image: "ya.png" },
  { nepali: "र", english: "ra", sound: "ra.mp3", image: "ra.png" },
  { nepali: "ल", english: "la", sound: "la.mp3", image: "la.png" },
  { nepali: "व", english: "va", sound: "va.mp3", image: "va.png" },
  { nepali: "स", english: "sa", sound: "sa.mp3", image: "sa.png" },
  { nepali: "ष", english: "ssha", sound: "ssha.mp3", image: "ssha.png" },
  { nepali: "श", english: "sha", sound: "sha.mp3", image: "sha.png" },
  { nepali: "ह", english: "ha", sound: "ha.mp3", image: "ha.png" },
  { nepali: "क्ष", english: "chya", sound: "chya.mp3", image: "chya.png" },
  { nepali: "त्र", english: "tra", sound: "tra.mp3", image: "tra.png" },
  { nepali: "ज्ञ", english: "gyan", sound: "gyan.mp3", image: "gyan.png" }
];
const composites = [
  { nepali: "क", english: "ka", sound: "ka.mp3", image: "ka.png" },
  { nepali: "का", english: "kaa", sound: "kaa.mp3", image: "kaa.png" },
  { nepali: "कि", english: "ki", sound: "ki.mp3", image: "ki.png" },
  { nepali: "की", english: "kee", sound: "kee.mp3", image: "kee.png" },
  { nepali: "कु", english: "ku", sound: "ku.mp3", image: "ku.png" },
  { nepali: "कू", english: "koo", sound: "koo.mp3", image: "koo.png" },
  { nepali: "के", english: "keh", sound: "keh.mp3", image: "keh.png" },
  { nepali: "कै", english: "kaih", sound: "kaih.mp3", image: "kaih.png" },
  { nepali: "को", english: "ko", sound: "ko.mp3", image: "ko.png" },
  { nepali: "कौ", english: "kau", sound: "kau.mp3", image: "kau.png" },
  { nepali: "कं", english: "kahm", sound: "kahm.mp3", image: "kahm.png" },
  { nepali: "क:", english: "kaha", sound: "kaha.mp3", image: "kaha.png" }
];
// let itemIndex = 0;

let vowelIndex = 0;
let rootIndex = 0;
let compositeIndex = 0;

let startIndex = 0;
let startButton = document.querySelector("#start-button h3");
let masthead = document.querySelector(".masthead");

function startLesson() {
  let mainSections = document.querySelectorAll(".main-section");
  let length = mainSections.length;
  if (startIndex === length) {
    startIndex = 0;
  }
  mainSections.forEach(section => {
    section.style.display = "none";
  });
  mainSections[startIndex].style.display = "block";
  resetSection();
  resetLetters();
  startIndex++;
}
//initial app condition
startLesson();

//navigate between landing page and lessons container
startButton.addEventListener("click", startLesson);

//reset lessons to first lesson in each level by clicking masthead; PROBABLY NEEDS A 'RESET' BUTTON SOMEWHERE ON THE PROMINENT PLACE ON THE PAGE;
masthead.addEventListener("click", startLesson);

//displaying lesson sections
function showSection(sectionClass, index = 0) {
  let sections = document.querySelectorAll("." + sectionClass);

  sections.forEach(section => {
    section.style.display = "none";
  });
  sections[index].style.display = "block";
}
//reset lesson sections to first lesson in each level
function resetSection() {
  showSection("level", 0);
  showSection("beginner-lesson", 0);
  showSection("intermediate-lesson", 0);
  showSection("advanced-lesson", 0);
  showSection("about-lesson", 0);
}

function showLetter(boxClass, item, itemIndex) {
  let length = item.length;
  if (itemIndex === length) {
    itemIndex = 0;
  }
  if (itemIndex < 0) {
    itemIndex = length - 1;
  }
  let itemBox = document.querySelector("." + boxClass);
  let lessonItem = `
      <section class="nepali">${item[itemIndex].nepali}</section>
      <section class="english">${item[itemIndex].english}</section>
      <section class="sound">${item[itemIndex].image}</section>
      <section class="image">${item[itemIndex].sound}</section>
      `;
  itemBox.innerHTML = lessonItem;
  //   itemIndex++;
}
function resetLetters() {
  showLetter("vowel-box", vowels, vowelIndex);
  showLetter("root-box", roots, rootIndex);
  showLetter("composite-box", composites, compositeIndex);
  vowelIndex = 0;
  rootIndex = 0;
  compositeIndex = 0;
}

//show sessions according to navigation menu clicks; uses event bubbling feature to add event to lesson container and to display specific section based on click event target

let lessonSection = document.querySelector("#lessons");

lessonSection.addEventListener("click", event => {
  if (event.target.className === "beginner-level-link level-link link") {
    showSection("level", 0);
  }
  if (event.target.className === "intermediate-level-link level-link link") {
    showSection("level", 1);
  }
  if (event.target.className === "advanced-level-link level-link link") {
    showSection("level", 2);
  }
  if (event.target.className === "about-level-link level-link link") {
    showSection("level", 3);
  }
  if (event.target.className === "vowel-link beginner-link link") {
    showSection("beginner-lesson", 0);
  }
  if (event.target.className === "root-link beginner-link link") {
    showSection("beginner-lesson", 1);
  }
  if (event.target.className === "composite-link beginner-link link") {
    showSection("beginner-lesson", 2);
  }
  if (event.target.className === "noun-link intermediate-link link") {
    showSection("intermediate-lesson", 0);
  }
  if (event.target.className === "verb-link intermediate-link link") {
    showSection("intermediate-lesson", 1);
  }
  if (event.target.className === "adjective-link intermediate-link link") {
    showSection("intermediate-lesson", 2);
  }
  if (event.target.className === "adverb-link intermediate-link link") {
    showSection("intermediate-lesson", 3);
  }
  if (event.target.className === "present-link advanced-link link") {
    showSection("advanced-lesson", 0);
  }
  if (event.target.className === "past-link advanced-link link") {
    showSection("advanced-lesson", 1);
  }
  if (event.target.className === "future-link advanced-link link") {
    showSection("advanced-lesson", 2);
  }
  if (event.target.className === "letter-link about-link link") {
    showSection("about-lesson", 0);
  }
  if (event.target.className === "word-link about-link link") {
    showSection("about-lesson", 1);
  }
  if (event.target.className === "sentence-link about-link link") {
    showSection("about-lesson", 2);
  }
});

//Add events to Beginner Lesson Section

let beginnerLevelSection = document.querySelector("#beginner-level");

beginnerLevelSection.addEventListener("click", event => {
  //play beginner-level lessons

  if (event.target.className === "prev-vowel") {
    vowelIndex--;
    if (vowelIndex < 0) {
      vowelIndex = vowels.length - 1;
    }
    showLetter("vowel-box", vowels, vowelIndex);
  }
  if (event.target.className === "next-vowel") {
    vowelIndex++;
    if (vowelIndex === vowels.length) {
      vowelIndex = 0;
    }
    showLetter("vowel-box", vowels, vowelIndex);
  }
  if (event.target.className === "prev-root") {
    rootIndex--;
    if (rootIndex < 0) {
      rootIndex = roots.length - 1;
    }
    showLetter("root-box", roots, rootIndex);
  }
  if (event.target.className === "next-root") {
    rootIndex++;
    if (rootIndex === roots.length) {
      rootIndex = 0;
    }
    showLetter("root-box", roots, rootIndex);
  }
  if (event.target.className === "prev-composite") {
    compositeIndex--;
    if (compositeIndex < 0) {
      compositeIndex = composites.length - 1;
    }
    showLetter("composite-box", composites, compositeIndex);
  }
  if (event.target.className === "next-composite") {
    compositeIndex++;
    if (compositeIndex === composites.length) {
      compositeIndex = 0;
    }
    showLetter("composite-box", composites, compositeIndex);
  }
});
