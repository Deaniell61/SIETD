import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  session:boolean
  constructor(private router:Router) { }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    location.reload();
  }

  ngOnInit() {
    
  }
  
  
}
