import { Component, OnInit } from '@angular/core';
import { FRONT_URL } from '../../config/constants';
import { Router } from '@angular/router';
import { AdminService } from '../../Service/admin.service';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {
  home_url: string = FRONT_URL + '/User/home-user';
  upload_url: string = FRONT_URL + '/Admin/upload';
  videos = {}
  constructor(  private router: Router,private adminService: AdminService) {}

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

}