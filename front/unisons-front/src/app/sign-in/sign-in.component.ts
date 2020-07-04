import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/Service/auth.service';
// import { UserService } from 'src/app/Service/user.service';
import { UserService } from '../Service/user.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public email: string = '';
  public pwd: string = '';
  public signInForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', [Validators.required]),
    });
  }
  public signIn(): void {
   
    if (this.signInForm.valid) {
      this.authService.login(this.email).subscribe(
        (res) => {
          if (res[0]) {
            this.userService.setEmail(this.email);
            this.userService.user = res;
            if (res[0].privilege == '0') {
              this.router.navigate(['User/home-user']);
            } else {
              this.router.navigate(['Admin/home-admin']);
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }


}
