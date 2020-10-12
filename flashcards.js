$(document).ready(()=>{
  class FlashCard {
    constructor(question, answer){
      //creating the flash card's elements
      this.FlashCardContainer = $(`<div></div>`);
      this.questionContainer = $(`<h1>${question}</h1>`)
      this.answerContainer = $(`<h1>${answer}</h1>`)
      this.delete = $(`<button>Delete</button>`);
      this.edit = $(`<button>Edit</button>`);
      this.showHideAnswer = $(`<button>Hide Answer</button>`);
      this.confirmEdit = $(`<button>Confirm</button>`).toggle()
      this.cancelEdit = $(`<button>Cancel</button>`).toggle()
      this.stateofAnswer= "";
      //composing the flashcard 
      this.FlashCardContainer.append(this.questionContainer, this.answerContainer, this.delete, this.edit, this.showHideAnswer, this.confirmEdit, this.cancelEdit)
      $("#container").append(this.FlashCardContainer)
      //adding functionality to buttons
      this.delete.click(()=>this.FlashCardContainer.remove())
      this.showHideAnswer.click(()=>{
        this.answerContainer.toggle()
      })
      this.edit.click(()=>{
        this.stateofAnswer = this.answerContainer.text()
        let temp = $(`<input value=${this.stateofAnswer}></input>`)
        this.answerContainer.replaceWith(temp)
        this.answerContainer = temp;
        this.delete.toggle();
        this.showHideAnswer.toggle();
        this.edit.toggle();
        this.confirmEdit.toggle();
        this.cancelEdit.toggle();
      })
      this.cancelEdit.click(()=>{
        let temp = $(`<h1>${this.stateofAnswer}</h1>`)
        this.answerContainer.replaceWith(temp)
        this.answerContainer = temp;
        this.delete.toggle();
        this.showHideAnswer.toggle();
        this.edit.toggle();
        this.confirmEdit.toggle();
        this.cancelEdit.toggle();
      })
      this.confirmEdit.click(()=>{
        let temp = $(`<h1>${this.answerContainer.val()}</h1>`)
        this.answerContainer.replaceWith(temp)
        this.answerContainer = temp;
        this.delete.toggle();
        this.showHideAnswer.toggle();
        this.edit.toggle();
        this.confirmEdit.toggle();
        this.cancelEdit.toggle();
      })
    }
    
  }
  
  $("#add").click(()=>{
    new FlashCard($("#questionBox").val(),$("#answerBox").val())
    $("#questionBox").val("")
    $("#answerBox").val("")
  })













})


