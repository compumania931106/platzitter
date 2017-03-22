import { Injectable } from '@angular/core';

import { User } from '../commons/user';

import { USERS } from './mocks/users';

@Injectable()
export class UserService{
    getUsers():Promise<User[]>{
        console.log('entramos al promise');
        return Promise.resolve(USERS);
    }

    loginUser(email, password):Promise<User>{
        let user:User;
        user = this.find(email, password);
        console.log(user);
        return Promise.resolve(user);
    }

    find(email, password):User{
        let user:User;
        user = USERS.find(x => x.email == email);
        if(user !== undefined && user.password == password){
            return user;
        }else{
            return undefined;
        }
    }
}