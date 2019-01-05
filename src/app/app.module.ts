import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app.routing.module';
import { MaterialModule } from './core/material.module';
import { Interceptor } from './core/app.interceptor';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';

import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    UserService,
    AuthService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
