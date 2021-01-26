import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  url = 'https://www.saos.org.pl/api/search/judgments';

   protected  addParams(data: any): HttpParams {
      let params = new HttpParams();
      if (data.courtType) {
        params = params.append('courtType', data.courtType);
      } else if (data.date_from) {
        params = params.append('judgmentDateFrom', data.date_from);
      } else if (data.date_to) {
        params = params.append('judgmentDateTo', data.date_to);
      } else if (data.name_judge) {
        params = params.append('judgeName', data.name_judge);
      } else if (data.signature) {
        params = params.append('caseNumber', data.signature);
      } else if (data.sortDirection) {
        params = params.append('sortingDirection', data.sortDirection);
      } else if (data.sort_by) {
        params = params.append('sortingField', data.sort_by);
      } else if (data.words) {
        params = params.append('all', data.words);
      }

      return params;
  }

  searchData(data: any): any {
    const searchData = this.addParams(data);
    console.log(searchData);
  }
}
