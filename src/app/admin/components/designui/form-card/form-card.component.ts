import { Component, OnInit,NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { FormCardService } from 'src/app/services/form-card.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent implements OnInit{
  saveDataForm: FormGroup;
  allIcons: any = []

 

  constructor(
    private formBuilder: FormBuilder, 
    private fcservice: FormCardService,
    // private ngZone: NgZone,
    // private router: Router,
    ) {
    this.createForm()
  }

  createForm() : any {
    this.saveDataForm = this.formBuilder.group({
      title: ["",Validators.required],
      icon: ["",Validators.required],
      description: ["",Validators.required]
    });


    
  }

  ngOnInit(): void {
    this.createForm()
    this.allIcons = this.fcservice.getIcons();
  }

  onSubmit(): void { 
    this.fcservice.AddCard(this.saveDataForm.value).subscribe((data) => {
     
    })
  }

}
