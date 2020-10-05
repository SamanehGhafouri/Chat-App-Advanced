import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ServiceService} from './services/service.service';
import 'rxjs/add/operator/subscribeOn';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Chat-App-Advanced';
  arr: User[] = [];

  constructor(public data: ServiceService) {

  }
  ngOnInit(){
    this.data.getUsers().subscribe(
      (user: User[]) => {
        this.arr = user;
        console.log('what is my array');
        console.log(this.arr);
      });
  }
}
