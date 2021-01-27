import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SearchResultInterface} from '../interfaces/search-result-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlSearch = 'https://www.saos.org.pl/api/search/judgments';
  urlShow = 'https://www.saos.org.pl/api/search/judgments';
  constructor(private httpClient: HttpClient) { }


  searchData(data: any): Observable<object> {
    const searchData = this.addParams(data);
    return this.httpClient.get<SearchResultInterface>(this.urlSearch, {params: searchData}).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
   protected  addParams(data: any): HttpParams {
      let params = new HttpParams();
      if (data.date_from) {
        params = params.append('judgmentDateFrom', data.date_from);
      }
      if (data.date_to) {
        params = params.append('judgmentDateTo', data.date_to);
      }
      if (data.name_judge) {
        params = params.append('judgeName', data.name_judge);
      }
      if (data.signature) {
        params = params.append('caseNumber', data.signature);
      }
      if (data.sortDirection) {
        params = params.append('sortingDirection', data.sortDirection);
      }
      if (data.sort_by) {
        params = params.append('sortingField', data.sort_by);
      }
      if (data.words) {
        params = params.append('all', data.words);
      }
      if (data.courtType) {
         params = params.append('courtType', data.courtType);
      }
      params = params.append('pageSize', '30');

      return params;
  }



}
