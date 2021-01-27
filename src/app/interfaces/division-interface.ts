import {CourtInterface} from './court-interface';

export interface DivisionInterface {
  code: string;
  court: CourtInterface;
  href: string;
  id: number;
  name: string;
}
