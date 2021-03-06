import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserInterface} from '../interfaces/user-interface';
import firebase from 'firebase';
import auth = firebase.auth;
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState: any;
  userSubject = new Subject<boolean>();
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
          this.userSubject.next(this.isLoggedIn);
        }else {
          this.userState = null;
          // @ts-ignore
          localStorage.setItem('user', '');
          this.userSubject.next(this.isLoggedIn);
        }
     }
   );
  }

  SignUp(email: string, password: string): any {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.SendVerificationMail();
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SignIn(email: string, password: string): any {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  ForgotPassword(passwordResetEmail: string): Promise<void> {
    return this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean {
    if (localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') as string);
      return (user !== null && user.emailVerified !== false);
    }
    return false;
  }

  signOut(): Promise<void> {
    return this.angularFireAuth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('zaloguj');
      });
  }

  SendVerificationMail(): Promise<void> {
    // @ts-ignore
    return this.angularFireAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verify']);
      });
  }

  setUserData(user: any): any {
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

  FacebookAuth(): Promise<void> {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  GoogleAuth(): Promise<void> {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider: any): Promise<void> {
    return this.angularFireAuth.signInWithPopup(provider)
      .then(result => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('orzeczenia');
          });
          this.setUserData(result.user);
      }).catch(error => {
        window.alert(error);
      });
  }
}
