import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Stack } from '../models';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit{

  @Input()
  tries!:number

  reveal:boolean = false

  answer:Stack = {
    firstPos: "R",
    secondPos: "G",
    thirdPos: "B",
    fourthPos: "O"
  }
  answerString:string = this.answer.firstPos+this.answer.secondPos+this.answer.thirdPos+this.answer.fourthPos

  @Output()
  onOutputAnswer = new Subject<Stack>()

  ngOnInit(): void {
    //this.generateAnswer()
    this.outputAnswer(this.answer)
  }

  outputAnswer(answer: Stack) {
    this.onOutputAnswer.next(answer)
  }

  revealAnswer() {
    this.reveal = true
  }

  // generateAnswer() {
  //   this.answer = {
  //     firstPos: "R",
  //     secondPos: "G",
  //     thirdPos: "B",
  //     fourthPos: "O"
  //   }
  // }

}
