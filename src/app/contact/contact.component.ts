import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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

  onSubmit() {
    console.log(this.contactForm.get('name')?.value);
    console.log(this.contactForm.get('rodo')?.errors);
  }

}
