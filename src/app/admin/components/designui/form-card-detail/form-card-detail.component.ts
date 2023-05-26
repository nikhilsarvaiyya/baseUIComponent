import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { FormCardDetailService } from 'src/app/services/form-card-detail/form-card-detail.service';
import { FormCardService } from 'src/app/services/form-card/form-card.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-card-detail',
  templateUrl: './form-card-detail.component.html'
})
export class FormCardDetailComponent implements OnInit {
  saveDataForm: FormGroup;
  allIcons: any = [];
  updateButton: boolean = false;
  selectedData: any = {}
  cardList : any = []
  constructor(
    private formBuilder: FormBuilder,
    private fcdservice: FormCardDetailService,
    private fcservice: FormCardService,
    
    // private ngZone: NgZone,
    // private router: Router,
  ) {
    this.createForm()
  }

  createForm(): any {
    this.saveDataForm = this.formBuilder.group({
      uid:["", Validators.required],
      html: ["", Validators.required],
      css: "",
      js: "",
    });
  }

  ngOnInit(): void {
    this.createForm()
    this.setKey()
    this.fcservice.GetCards().subscribe((data) => {
      this.cardList = data?.response?.data;
    });
    
  }

  setKey(){
    // this.saveDataForm.get("menu").valueChanges.subscribe(selectedValue => {
    //   this.saveDataForm.patchValue({
    //     uid: selectedValue,
    //   });
    //   setTimeout(() => {
    //     console.log(this.saveDataForm.value)
    //   })
    // })
  }

  onSubmit(): void {
    
    this.fcdservice.AddCardDetail(this.saveDataForm.value).subscribe((data) => {
      this.resetForm()
    })
  }

  updateData() {
    this.fcdservice.updateCardDetail(this.selectedData._id, this.saveDataForm.value).subscribe((data) => {
      console.log({ data })
      this.resetForm()
    })
  }

  setToUpdateItem(updateItem: any) {
    this.updateButton = true
    this.selectedData = updateItem;
    
    this.saveDataForm = this.formBuilder.group({
      uid: updateItem.uid,
      html: [updateItem.html, Validators.required],
      css: updateItem.css,
      js: updateItem.js
    });
    this.setKey()
  }

  resetForm() {
    this.updateButton = false
    this.saveDataForm.reset()
  }
}

