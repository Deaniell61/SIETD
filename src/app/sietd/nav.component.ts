import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  rol:string = localStorage.getItem('currentROL');
  entidad:string = localStorage.getItem('currentENTIDAD');
  
  constructor(private router:Router) { }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('currentFirstName');
    localStorage.removeItem('currentLastName');
    localStorage.removeItem('currentId');
    localStorage.removeItem('currentDPI');
    localStorage.removeItem('currentROL');
    
    location.reload();
  }
  ngOnInit() {
    // console.log(this.entidad);
  }

}
