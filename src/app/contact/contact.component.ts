import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      rodo: ['', Validators.required],
      copy: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
   /* this.httpClient.post('http://localhost:4200/receive', {}).subscribe(
      data => {
        console.log(data);
      }
    );*/
    console.log(this.contactForm.get('name')?.value);
    console.log(this.contactForm.get('rodo')?.errors);
  }

}
