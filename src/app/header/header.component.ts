import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isLogged = false;
  unsubscription: Subscription;
  constructor(private authService: AuthService) {
    this.unsubscription = this.authService.userSubject.subscribe(
        data => {
          this.isLogged = data;
        }
    );
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }

}
