import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { FormCardService } from 'src/app/services/form-card.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent {
  saveDataForm: FormGroup;
  saveData: any = { title: "Nikhil" }
  allIcons: any = []


  constructor(private formBuilder: FormBuilder, private fcservice: FormCardService) {
    this.createForm()
    
  }

  createForm() {
    this.saveDataForm = this.formBuilder.group({
      key: ['', Validators.required],
      title: ['', Validators.required],
      path: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.allIcons = this.fcservice.getIcons();
    this.saveDataForm.valueChanges.subscribe(val => {
      console.log('Changed: {$val.name} : {$val.password} ');
      console.log('Changed: ' + JSON.stringify(val));
    });
    console.log(this.allIcons);
  }

  onSubmit() {

  }

}
