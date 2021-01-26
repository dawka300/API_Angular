import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  result: any;
  constructor(private httpClient: HttpClient) { }

 /* ngOnInit(): void {
    this.httpClient.get('https://www.saos.org.pl/api/search/judgments?pageSize=10&courtType=COMMON&sortingField=JUDGMENT_DATE&sortingDirection=DESC')
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }*/

  ngOnInit(): void {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('pageSize', '40');
    searchParams = searchParams.append('pageNumber', '2');
    searchParams = searchParams.append('courtType', 'COMMON');
    searchParams = searchParams.append('sortingField', 'JUDGMENT_DATE');
    searchParams = searchParams.append('sortingDirection', 'DESC');
    this.httpClient.get('https://www.saos.org.pl/api/search/judgments',
      {
        // headers: {
        //   dawid : 'bla',
        // },
        params: searchParams
      }).subscribe(
        data => {
          console.log(data);
        }
      );
  }

}
