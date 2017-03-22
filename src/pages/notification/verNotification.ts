import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Notifications } from '../../commons/notification';

@Component({
    selector: 'ver-notification',
    template: `
        <ion-header>
            <ion-navbar>
                <ion-title>
                    Notifications
                </ion-title>
            </ion-navbar>
        </ion-header>

<ion-content padding>
 
    <ion-thumbnail item-left>
      <img src="{{notification.img}}">
    </ion-thumbnail>
    <h5> {{notification.action}} </h5>
    <h2>{{notification.nick_name}}</h2>
    <p>{{notification.text}}</p>

</ion-content>
    
    `
})

export class VerNotificationPage{
    notification:Notifications; //Puede ser {}, al fin de cuentas es un JSON
    constructor (private navParams:NavParams){
        this.notification = navParams.get('id');
    }
}