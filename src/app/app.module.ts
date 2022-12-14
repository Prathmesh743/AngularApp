import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from 'hello-world-services/user.service';
import { PostService } from 'hello-world-services/post.service';
import { ViewUsersComponent } from './view-users/view-users.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { MsgComponentComponent } from './msg-component/msg-component.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewUsersComponent,
    CreatePostComponent,
    UpdatePostComponent,
    HelloComponentComponent,
    MsgComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
