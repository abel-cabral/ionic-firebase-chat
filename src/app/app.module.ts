import { UserService } from './../providers/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Importo o caminho das minhas dependencias necessarias pro Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { SignupPage } from '../pages/signup/signup';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    SignupPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    //importo minha Angular Firebase e a constante que criei com os dados do firebase, inicializando o servico
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    SignupPage,
  ],
  providers: [
    StatusBar,  
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
  ]
})
export class AppModule {}
