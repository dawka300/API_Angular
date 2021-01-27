import {CourtCasesInterface} from './court-cases-interface';
import {JudgesInterface} from './judges-interface';
import {DivisionInterface} from './division-interface';

export interface SearchResultInterfaceItem {
  id: number;
  href: string;
  courtType: string;
  division: DivisionInterface;
  courtCases: CourtCasesInterface[];
  judgmentType: string;
  judgmentDate: string;
  judges: JudgesInterface[];
  keywords: string[];
  textContent: string;

}


