import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      param => {
        this.id = param.id;
      }
    );
    }

  ngOnInit(): void {
    console.log(this.id);
  }

}
