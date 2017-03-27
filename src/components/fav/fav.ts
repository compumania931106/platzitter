import { Component, Input, EventEmitter, Output } from '@angular/core';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2'


@Component({
    selector:'fav',
    templateUrl: 'fav.html'
})

export class Fav{
    @Input() key: string;
    @Input() cantidad: any;
    @Output() onFav = new EventEmitter<string>();

    test = "";
    icon = "ios-heart-outline";

    listado:FirebaseListObservable<any>;

    constructor(public database:AngularFireDatabase){
        this.listado = this.database.list('/twitts');
    }

    alerta(){
        if(this.test == ""){
            let cant:number = parseInt(this.cantidad) + 1;
            this.listado.update(this.key, {
                fav: cant
            });


            this.test = "primary";
            this.icon = "ios-heart"
        }else{
            let cant:number = parseInt(this.cantidad) - 1;
            this.listado.update(this.key, {
                fav: cant
            });
            
            this.test = "";
            this.icon = "ios-heart-outline";
        }

        this.onFav.emit("Gracias por hacer fav");

    }
}