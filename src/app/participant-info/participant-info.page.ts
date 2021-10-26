import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-info',
  templateUrl: './participant-info.page.html',
  styleUrls: ['./participant-info.page.scss'],
})
export class ParticipantInfoPage implements OnInit {
  
participantInfo ={
  name:"",
  age:""
}

  constructor(public router:Router) { }

  ngOnInit() {
  }

    startPressed(){
      if(this.participantInfo.name === "" || this.participantInfo.age ===""){
        alert("please complete the form first!");
      }else {
        localStorage.setItem("participantInfo", JSON.stringify(this.participantInfo));
        this.router.navigate(['/quiz']);
      }
    }
}
