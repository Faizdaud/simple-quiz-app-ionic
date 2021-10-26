import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  score;
  participant;

  constructor(
    public httpService:HttpService,
    public toastController: ToastController,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.score = localStorage.getItem("score");
    //transform string of data from local storage to Js object
    this.participant = JSON.parse(localStorage.getItem("participantInfo"));
    console.log(this.participant);
    // console.log(this.participant.name);
    
    // localStorage.removeItem("score");
    // localStorage.removeItem("participantInfo");

    this.score = this.route.snapshot.params['score'];
    //call API to send score 

    let data = {
      "sheet1":{
        "name": this.participant.name,
        "age": this.participant.age,
        "score":this.score,
        "time":Date.now()
      }
    }

    this.httpService.sendScore(data).subscribe(async res=>{
      const toast =await this.toastController.create({
        message: "Results are submitted",
        duration:1000
      });
      toast.present();
    }, err=>{ 
      console.log(err);
    });

  }

}
