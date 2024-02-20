import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinsService } from './services/bitcoins.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyASnn7KUCLuPvrS_Jboyk0If-mRZABCMDM",
      authDomain: "angular-auth-df76e.firebaseapp.com",
      databaseURL: "https://angular-auth-df76e-default-rtdb.firebaseio.com",
      projectId: "angular-auth-df76e",
      storageBucket: "angular-auth-df76e.appspot.com",
      messagingSenderId: "644096836227",
      appId: "1:644096836227:web:47bad91a59fe97ec0251b6"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    BitcoinsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
