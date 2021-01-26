import {CourtCasesInterface} from './court-cases-interface';
import {JudgesInterface} from './judges-interface';

export interface SearchResultInterface {
  id: number;
  href: string;
  courtType: string;
  courtCases: CourtCasesInterface[];
  judgmentType: string;
  judgmentDate: string;
  judges: JudgesInterface[];
  keywords: string[];
  textContent: string;

}


