import { Component, OnInit } from '@angular/core';
import {questionsData} from '../../../app/models/optionsData'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  questions: questionsData | undefined;


  constructor(){


  }

  ngOnInit(): void {

  }

}
