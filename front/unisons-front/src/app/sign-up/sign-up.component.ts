import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;
  public user: User = new User();
  public rePwd: string;

  constructor(private authService: AuthService , private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      pwd: new FormControl(this.user.pwd, [Validators.required]),
      country: new FormControl(this.user.country, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      repwd: new FormControl(this.rePwd, [Validators.required]),
    });
  }

  public signUp(): void {
    this.authService.addUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['User/home-user']);
      },
      err => { console.log(err); }
    ) ;  // console.log(this.signUpForm);


  }
}


