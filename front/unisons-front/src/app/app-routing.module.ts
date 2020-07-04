import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './Admin/upload/upload.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Admin/upload',
    component: UploadComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'Admin/home-admin',
    component: HomeAdminComponent,
  },
  {
    path: 'User/home-user',
    component: HomeUserComponent,
  },
  {
    path: 'about/about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
