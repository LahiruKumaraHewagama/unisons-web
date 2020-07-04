import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  constructor( private router: Router) { }
  ngOnInit(): void {
  }


  public logout(): void {
    this.router.navigate(['home']);
  }
}
