import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { VerNotificationPage } from '../pages/notification/verNotification';

import { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service';
import { DBService } from '../services/db.services';

//Firebase
import { AngularFireModule  } from 'angularfire2';
export const CONFIG = {
    apiKey: "AIzaSyCEBD5Vgv1Si880fGGnHUod3reFUIta464",
    authDomain: "platzitter-a6d05.firebaseapp.com",
    databaseURL: "https://platzitter-a6d05.firebaseio.com",
    storageBucket: "platzitter-a6d05.appspot.com",
    messagingSenderId: "1014837125132"
};

//CLOUD Notification
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const CLOUDSETTINGS: CloudSettings = {
  'core':{
    'app_id': '78cd69bf'
  },
  'push': {
    'sender_id': '1014837125132',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

//Refacto por Router
/*
var links = [
  { component: LoginPage, name:'Login', segment:'login' },
  { component: TabsPage, name:'tabs', segment:'tabs' }
]
*/

@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav
  ],
  imports: [
    IonicModule.forRoot(MyApp/*, {}, links*/),
    AngularFireModule.initializeApp(CONFIG),
    CloudModule.forRoot(CLOUDSETTINGS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
  UserService, 
  DBService]
})
export class AppModule {}
