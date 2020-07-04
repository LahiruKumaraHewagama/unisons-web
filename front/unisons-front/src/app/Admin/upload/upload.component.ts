import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../Service/admin.service';
import { Video } from '../../video';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // public title: string = '';
  // public link: string = '';
  // public date: string = '';
  public UploadForm: FormGroup;
  public video: Video = new Video();
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  public logout(): void {
    this.router.navigate(['home']);
  }

  public createForm(): void {
    this.UploadForm = new FormGroup({
      Title: new FormControl(this.video.title, [Validators.required]),
      Date: new FormControl(this.video.upload_date, [Validators.required]),
      Link: new FormControl(this.video.url, [Validators.required]),
    });
  }
  public upload(): void {
    console.log(this.video);
    if (this.UploadForm.valid) {
      this.adminService.addVideo(this.video).subscribe(
        (res) => {
          this.router.navigate(['Admin/home-admin']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
