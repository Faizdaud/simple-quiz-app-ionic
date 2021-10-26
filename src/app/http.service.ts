import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }

    getAllQuestions() {
      return  this.httpClient.get('https://opentdb.com/api.php?amount=10');

    }

    sendScore(data){
      return this.httpClient.post(
        'https://api.sheety.co/2e77d9a4dd8f71fe4323dc108982ce48/markah/sheet1', data
      )
    }

    getScores(){
      return  this.httpClient.get('https://api.sheety.co/2e77d9a4dd8f71fe4323dc108982ce48/markah/sheet1');

    }
}
