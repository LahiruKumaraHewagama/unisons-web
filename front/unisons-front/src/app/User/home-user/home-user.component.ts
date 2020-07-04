import { Component, OnInit } from '@angular/core';
import { FRONT_URL } from '../../config/constants';
import { Router } from '@angular/router';
import { AdminService } from '../../Service/admin.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  home_url: string = FRONT_URL + '/User/home-user';
  about_url: string = FRONT_URL + '/about/about';
  safeSrc: SafeResourceUrl;
  videos: any;
  video_list:any=[]

  constructor(
    private router: Router,
    private adminService: AdminService,
    private userService: UserService,
    private sanitizer: DomSanitizer

  ) {}
  ngOnInit(): void {
    this.load_data();
  }

  public load_data(): void {
    this.adminService.getVideos().subscribe(
      (res) => {
        console.log(res);
        this.videos = res;
      },
      (err) => {
        console.log(err);
      }
    );
    // this.userService.getLikedVideo().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.video_list = res;
    //     console.log("sjdnakjf:::::::::::"+this.video_list)
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  public addLike(video_id: any): void {
    // console.log( video_id);
    this.userService.addLike(video_id).subscribe(
      (res) => {
        console.log(res);
        this.load_data();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public logout(): void {
    this.router.navigate(['home']);
  }

  public Load(url:any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



 
}
