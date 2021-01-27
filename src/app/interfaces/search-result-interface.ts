import {SearchResultInterfaceItem} from './search-result-Item-interface';

export interface SearchResultInterface {
  info: {
    totalResults: number;
  };
  items: SearchResultInterfaceItem[];
  link: object[];
  queryTemplate: object;
}
