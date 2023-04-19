import { Component, OnInit } from '@angular/core';
import { Stack } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'day33workshop';

  answer!:Stack
  input!:Stack
  tryList:Stack[] = []
  tries:number = 10
  hasWon:boolean = false
  hint:string[] = []
  hintList:string[][] = []

  getAnswer(answer:Stack) {
    this.answer = answer
    console.info(this.answer)
  }

  getSelection(input:Stack) {
    this.input = input
    console.info(this.input)
  }

  compareAnswer() {
    this.tries --
    this.checkHint()
    this.tryList.push(this.input)
    if (this.answer.firstPos==this.input.firstPos && this.answer.secondPos==this.input.secondPos && this.answer.thirdPos==this.input.thirdPos && this.answer.fourthPos==this.input.fourthPos){
      console.info("correct")
      this.hasWon = true
    }
    console.info("incorrect")
  }

  checkHint() {
    this.hint = []
    if (this.answer.firstPos==this.input.firstPos){
      this.hint.push("B")
    } else if (this.answer.firstPos==this.input.secondPos || this.answer.firstPos==this.input.thirdPos || this.answer.firstPos==this.input.fourthPos){
      this.hint.push("W")
    }
    if (this.answer.secondPos==this.input.secondPos){
      this.hint.push("B")
    } else if (this.answer.secondPos==this.input.firstPos || this.answer.secondPos==this.input.thirdPos || this.answer.secondPos==this.input.fourthPos){
      this.hint.push("W")
    }
    if (this.answer.thirdPos==this.input.thirdPos){
      this.hint.push("B")
    } else if (this.answer.thirdPos==this.input.firstPos || this.answer.thirdPos==this.input.secondPos || this.answer.thirdPos==this.input.fourthPos){
      this.hint.push("W")
    }
    if (this.answer.fourthPos==this.input.fourthPos){
      this.hint.push("B")
    } else if (this.answer.fourthPos==this.input.firstPos || this.answer.fourthPos==this.input.secondPos || this.answer.fourthPos==this.input.thirdPos){
      this.hint.push("W")
    }
    this.hintList.push(this.hint)

  }


}
