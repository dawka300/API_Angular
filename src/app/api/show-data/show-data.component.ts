import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {
  request: any;
  result: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
    this.route.params.subscribe(
      param => {
        this.request = this.apiService.getVerdict(param.id);
      }
    );
    }

  ngOnInit(): void {
    this.request.subscribe(
        (data: any) => {
        this.result = data.data;
        console.log(this.result);
      }
    );
  }

  changeVerdict(index: number): void {
    this.router.navigate(['/orzeczenia', index]);
  }

}
