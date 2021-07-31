import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpService:HttpService) { }

  employeeDetails(){
    this.httpService.getDetails().subscribe(books => {
      console.log(books);
    });
  }

}
