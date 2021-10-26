import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  //
  questions;
  options;
  counter = 0;
  score = 0;
  currentQuestion="";
  //res
  //this.options = res["results"]

  constructor(public router:Router, public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllQuestions().subscribe(res=>{
      console.log(res);
      //response adalah object
      //response.results adalah array use index od ngFor
      // gabungkan incorrect answers dengan correct answers
      // this.options = this.questions[0]["incorrect_answers"];
      // this.options.push(this.questions[0]["correct_answer"]);

        //get results array(that stores the questions and answers) from api 
        this.questions = res["results"]; 
        console.log(this.questions);
        this.loadQuestions();
     
        this.loadAnswers();    

    }, err=>{
      console.log(err);
    })
  }

  loadQuestions(){


const htmlDecode = (input) =>{
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

    console.log(`Loading Questions`);
    this.currentQuestion = this.questions[this.counter].question;
    this.currentQuestion = htmlDecode(this.currentQuestion)
    // console.log(this.currentQuestion);
    // console.log(typeof this.currentQuestion);
    
    console.log(`current counter is ${this.counter}`)
 
  }

  loadAnswers() {
    this.options = this.questions[this.counter]["incorrect_answers"];
    this.options.push(this.questions[this.counter]["correct_answer"]);
    this.shuffleAnswers(this.options);
    return this.htmlDecode(this.options);
  }

  checkAnswer(option){
    console.log(`checking answer`);
    // console.log(`current counter is ${this.counter}`);
    // console.log(this.counter >= 10);
 
      if(option == this.questions[this.counter]["correct_answer"]){
        console.log("correct");
        this.score++;
 
      } else {
        // console.log("wrong");
        // console.log(`corect answer is for question ${this.counter + 1} is ${this.questions[this.counter]["correct_answer"]}`);
      }

      this.counter++;
      console.log(`current counter is ${this.counter}`);

      if(this.counter === this.questions.length){
        localStorage.setItem("score", this.score.toString());
        console.log(`you have finished the quiz!`);
        console.log(this.score);

        let done = {
          score :this.score
        }
        this.router.navigate(['/score', done.score]);
      }else{
      this.loadQuestions();
      this.loadAnswers();
      }
    
    }


    calculateScore(){
      return this.score;
    }

    htmlDecode = (input) =>{
      var e = document.createElement('textarea');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    shuffleAnswers(array){
        let m = array.length;
        let t;
        let i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }



}
