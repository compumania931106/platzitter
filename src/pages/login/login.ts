import { Component } from '@angular/core';

import { TabsPage } from '../tabs/tabs';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { UserService } from '../../services/user.service';

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
        private userService:UserService){
    }

    ngOnInit(){
        console.log('Arranco el init');
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