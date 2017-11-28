import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private location:Location) { }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    location.reload();
  }
  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
