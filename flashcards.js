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
    this.question = question;
    this.answer = answer;
    //these are the actual buttons
    this.FlashCardContainer = document.createElement("DIV")
    t
    //setup show/hide 
    this.showHide = document.createElement("BUTTON");
    //setup edit 
    this.edit = document.createElement("BUTTON");
    //setup delete
    this.delete = document.createElement("BUTTON");
  }
}

//an array that holds all the flash cards
let allFlashCards = [];
