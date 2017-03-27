import { Component } from '@angular/core';

import { TabsPage } from '../tabs/tabs';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { UserService } from '../../services/user.service';

import { DBService } from '../../services/db.services';

import { Geolocation } from 'ionic-native';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage{
    user = { "email":"", "password":""};

    constructor(
        private alertCtrl:AlertController,
        public loadingCtrl:LoadingController,
        public navCtrl:NavController,
        private userService:UserService,
        private dbService:DBService){
            dbService.openDatabase();
            dbService.createTable();
            console.dir(dbService.getAll());

    }

ionViewWillEnter(){
        console.log("arranco el init");
        
        Geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        let watch = Geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        // to stop watching
        watch.unsubscribe();
    }

    login = ():void =>{
        let loading = this.loadingCtrl.create({
                content:'please wait...'
            });


        if(this.user.email != "" && this.user.password != ""){
            let usuarios;
            
            loading.present();

            let login:false;
            this.userService
            .loginUser(this.user.email, this.user.password)
            .then(
                (response) =>{
                    loading.dismiss();
                    if(response !== undefined){
                        this.navCtrl.push(TabsPage);
                    }else{
                        let alert = this.alertCtrl.create({
                        title: "login",
                        subTitle: "login incorrecto",
                        buttons: ['Aceptar']
                });
                alert.present();
                    }
                }
            )

            
        }else{
            loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: "login",
                    subTitle: "Complete los campos",
                    buttons: ['Aceptar']
                });
                alert.present();
        }
    }


}