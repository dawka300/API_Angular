import { Component, OnInit } from '@angular/core';
import {CourtService} from '../services/court.service';
import {SelectInterface} from '../interfaces/select-interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  typeCourts: SelectInterface[] = [];
  sortByType: SelectInterface[] = [];
  sortDirection: SelectInterface[] = [];
  form: FormGroup;
  resultSearch: any;
  currentPage = 0;

  constructor(
    private courtService: CourtService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      words: [''],
      signature: [''],
      date_from: [''],
      date_to: [''],
      // courtType: [''],
      name_judge: [''],
      sort_by: [''],
      sortDirection: [''],
    });
  }


  ngOnInit(): void {
    this.typeCourts = this.courtService.typeOfCourts;
    this.sortByType = this.courtService.sortByType;
    this.sortDirection = this.courtService.sortDirection;
  }

  onSubmit(): void {
    this.apiService.searchData(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.resultSearch = data;
      }
    );
  }
  showVerdict(index: number): any {
    this.router.navigate([index], {relativeTo: this.route});
  }

}
