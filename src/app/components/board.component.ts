import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { Stack } from '../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  tryList!:Stack[]

  @Input()
  hintList!:string[][]

  @Output()
  onOutputSelection = new Subject<Stack>()

  form!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstPos: this.fb.control<string>('', [Validators.required]),
      secondPos: this.fb.control<string>('', [Validators.required]),
      thirdPos: this.fb.control<string>('', [Validators.required]),
      fourthPos: this.fb.control<string>('', [Validators.required])
    })
  }

  processForm() {
    const stack:Stack = this.form.value
    this.onOutputSelection.next(stack)
    this.form.reset()
  }

}
