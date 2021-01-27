import { Injectable } from '@angular/core';
import {SelectInterface} from '../interfaces/select-interface';

@Injectable({
  providedIn: 'root'
})
export class CourtService {
  private typeCourts: SelectInterface[] = [
    {name: 'apelacyjny', value: 'APPEAL'},
    {name: 'okręgowy', value: 'REGIONAL'},
    {name: 'rejonowy', value: 'DISTRICT'}
  ];

  private sortBy: SelectInterface[] = [
    {name: 'Standardowo', value: 'DATABASE_ID'},
    {name: 'Data orzeczenia', value: 'JUDGMENT_DATE'},
    {name: 'Wartość WPS', value: 'MAXIMUM_MONEY_AMOUNT'},
    {name: 'Rodzaj sądu', value: 'CC_COURT_TYPE'},
    {name: 'Nazwa sądu', value: 'CC_COURT_NAME'},
    {name: 'Nazwa wydziału', value: 'CC_COURT_DIVISION_NAME'},
  ];

  private sortByDirection: SelectInterface[] = [
    {name: 'rosnąco', value: 'ASC'},
    {name: 'malejąco', value: 'DESC'},
  ];
  constructor() { }

  get typeOfCourts(): any {
    return this.typeCourts.slice();
  }
  get sortByType(): any {
    return this.sortBy.slice();
  }
  get sortDirection(): any {
    return this.sortByDirection.slice();
  }
}
