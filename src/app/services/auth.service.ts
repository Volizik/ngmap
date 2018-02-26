import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from 'firebase/app';

@Injectable()
export class AuthService {

    user: Observable<User>;
    users;

    constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.user = firebaseAuth.authState;
        this.users = db.list('/users');
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
                const newUser = {
                    'id':  value.G,
                    'email': value.email
                };
                this.users.push(newUser);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut();
    }

}
