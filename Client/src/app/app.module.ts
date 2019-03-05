import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './service/app.login.service'

import { admnHome } from "./admincomponents/admnHome.Component";
// import { Login } from './login.component/login.component.component';
import { accessUser } from './admincomponents/accessUser.component';
import { adminService } from './service/app.admin.service';
import { crtUser } from './admincomponents/crtUser.component';
import { usrServc } from './service/app.user.service';
import { crtRole } from './admincomponents/crtRole.component';
import { admPrfl } from './admincomponents/admPrfl.component';
import { oprtrHome } from './operatorcomponent/oprtrHome.Component';
import { oprtraccessUser } from './operatorcomponent/oprtraccessUser.component';
import { usereHome } from './usercomponents/userHome.Component';
import { userPrfl } from './usercomponents/userPrfl.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    admnHome,
    LoginComponent,
    accessUser,
    crtUser,
    crtRole,
    admPrfl,
    oprtrHome,
    oprtraccessUser,
    usereHome,
    userPrfl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService,adminService,usrServc],
  bootstrap: [AppComponent]
})
export class AppModule { }
