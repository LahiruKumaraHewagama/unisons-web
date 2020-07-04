import { Component, OnInit } from '@angular/core';
import { FRONT_URL } from '../../config/constants';
import { Router } from '@angular/router';
import { AdminService } from '../../Service/admin.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {
  home_url: string = FRONT_URL + '/User/home-user';
  upload_url: string = FRONT_URL + '/Admin/upload';
  videos = {}
  safeSrc: SafeResourceUrl;
  constructor(  private router: Router,private adminService: AdminService ,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.load_data();
  }

  public load_data(): void{
    this.adminService.getVideos().subscribe(
     
      (res) => {
        console.log(res);
        this.videos = res;
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