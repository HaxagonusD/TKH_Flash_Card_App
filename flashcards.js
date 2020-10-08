/**
 * We need flash cards
 *  we need delete button
 *      This button needs functionality
 *  We need edit button
 *      This button needs functionality
 *   We need a button to add flash cards
 *      This button needs fucntionality
 * We need a tile
 * We need a button to add flash cards
 * We need to hide answer and show answer
 *  This is a button and it needs fucntionality
 *
 *
 * summary:
 *  add
 *  edit
 *  delete
 *  show/ hide
 *
 *
 *
 */

class FlashCard {
  constructor(question, answer) {
    // this is the text that is shown
    this.question = document.createElement("h1");

    this.question.innerText = question;
    console.log(this.question);
    this.answer = document.createElement("h1");
    this.answer.innerText = answer;

    this.FlashCardContainer = document.createElement("div");
    console.log(this.FlashCardContainer);
    this.FlashCardContainer.appendChild(this.question);
    this.FlashCardContainer.appendChild(this.answer);
    //these are the actual buttons
    //setup show/hide
    this.showHide = document.createElement("BUTTON");
    this.showHide.innerText = "Show/Hide";
    //setup edit
    this.edit = document.createElement("BUTTON");
    this.edit.innerText = "Edit";
    //setup delete
    this.delete = document.createElement("BUTTON");
    this.delete.innerText = "Delete";
    this.delete.addEventListener("click", () =>
      this.FlashCardContainer.remove()
    );

    this.FlashCardContainer.appendChild(this.delete);
    this.FlashCardContainer.appendChild(this.edit);
    this.FlashCardContainer.appendChild(this.showHide);
  }
}

const createFlashCard = (question, answer) =>
  new FlashCard(question, answer).FlashCardContainer;
//an array that holds all the flash cards

const container = document.getElementById("container");
const addButton = document.getElementById("add");
const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");

addButton.addEventListener("click", () =>
  container.appendChild(createFlashCard(questionBox.value, answerBox.value))
);

// edit basically just replaces the h1 with a seach box add a confirm button then replace back
// need to figure out how to show and hide elements
//finally css
