import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './Admin/upload/upload.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    HomeAdminComponent,
    HomeUserComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
