import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Profile } from '../../commons/profile';

import { twitt } from '../../commons/twitt';

import { Camera } from 'ionic-native';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  me:Profile = {
    "img":'https://pbs.twimg.com/profile_images/829903078191140865/DNuAVVnF_400x400.jpg',
     nick_name:'@jorgeucano',
    "interactions":1,
    "github": "jorgeucano",
    "twitter": "jorgeucano",
    "medium": "jorgeucano",
    "bio": "Jorge Cano es Google Developer Expert en Angular y Tecnologías Web. Organizador de ngbaires. Director de tecnologias en JavaScript es especialista en Angular y Firebase. Tambien da cursos, charlas y escribe articulos tecnicos."
  };

listado:Array<twitt> = [
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];


  constructor(public navCtrl: NavController) {

  }

  foto():void{
    Camera.getPicture({
      quality:50,
      destinationType: Camera.DestinationType.FILE_URI,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit:true,
      correctOrientation:true
    }).then(
      (ImageData)=>{
        let base64Image = 'data:image/base64,' + ImageData;
    }, (err)=>{
      //Manejar error
    });
  }



}

