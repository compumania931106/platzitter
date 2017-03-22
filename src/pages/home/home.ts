import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { twitt } from '../../commons/twitt';

import { Fav } from '../../components/fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado:Array<twitt> = [
      {img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {img:'https://pbs.twimg.com/profile_images/829903078191140865/DNuAVVnF_400x400.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];

  constructor(public navCtrl: NavController) {

  }

  onFav(response:string){
    alert(response);
  }

}

