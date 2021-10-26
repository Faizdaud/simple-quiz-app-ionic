import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.page.html',
  styleUrls: ['./high-score.page.scss'],
})
export class HighScorePage implements OnInit {

  highScore;
  name;
  scores;
  trueScores =[];

  students =
  [
    {
        "name": "Will Smith",
        "gender": "Male",
        "country": "USA"
    },
    {
        "name": "Jackline Joy",
        "gender": "Female",
        "country": "Sri Lanak"
    },
    {
        "name": "Alu Arjun",
        "gender": "Male",
        "country": "Microsoft"
    },
    {
        "name": "Kavitha Kumar",
        "gender": "Female",
        "country": "India"
    },
    {
        "name": "John Snow",
        "gender": "Male",
        "country": "United Kingdom"
    },
    {
        "name": "Priya kanana",
        "gender": "Female",
        "country": "India"
    },
    {
        "name": "Shri Devi",
        "gender": "Female",
        "country": "Sri Lanka"
    },
    {
        "name": "Richard Roy",
        "gender": "Male",
        "country": "France"
    },
    {
        "name": "Sonu Nigam",
        "gender": "Male",
        "country": "India"
    },
    {
        "name": "Priya Dutt",
        "gender": "Female",
        "country": "USA"
    }
]

  constructor( public http: HttpService) { }

  ngOnInit() {

    // this.getHighScore();

   
      this.scores = this.http.getScores().subscribe(res=>{
        console.log(typeof res)
        this.scores = res; 
        console.log(this.scores);
      }, err=>{
          console.log(err);
        })
  }
}
