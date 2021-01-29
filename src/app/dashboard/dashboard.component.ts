import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
  }

  onLogout(): void {
    this.authService.signOut();
  }

}
