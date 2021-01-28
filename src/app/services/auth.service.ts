import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserInterface} from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState: any;
  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router
  ) {
   this.angularFireAuth.authState.subscribe(
     (user) => {
        if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(user));
        }else {
          this.userState = null;
          // @ts-ignore
          localStorage.setItem('user', null);
        }
     }
   );
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return (user !== null && user.emailVerified !== false);
  }

  signOut(): Promise<void> {
    return this.angularFireAuth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('login');
      });
  }

  private setUserData(user: UserInterface): any {
    const userReference: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const UserState: UserInterface = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };

    return userReference.set(UserState, {merge: true});
  }
}
