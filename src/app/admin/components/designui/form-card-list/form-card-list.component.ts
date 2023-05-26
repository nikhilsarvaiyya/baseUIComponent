import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { FormCardService } from 'src/app/services/form-card/form-card.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/comman/toast/toast.service'; 
@Component({
  selector: 'app-form-card-list',
  templateUrl: './form-card-list.component.html'
})
export class FormCardListComponent implements OnInit {
  saveDataForm: FormGroup;
  allIcons: any = [];
  updateButton: boolean = false;
  selectedData: any = {}

  constructor(
    private formBuilder: FormBuilder,
    private fcservice: FormCardService,
    public toastService: ToastService
    // private ngZone: NgZone,
    // private router: Router,
  ) {
    this.createForm()
  }

  createForm(): any {
    this.saveDataForm = this.formBuilder.group({
      key:'',
      title: ["", Validators.required],
      path: '',
      icon: '',
      description: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm()
    this.allIcons = this.fcservice.getIcons();
    this.setKey()
    
  }

  
  ngOnDestroy(): void {
		this.toastService.clear();
	}

  setKey(){
    this.saveDataForm.get("title").valueChanges.subscribe(selectedValue => {
      this.saveDataForm.patchValue({
        key: selectedValue?.replace(/\s/g, '')?.toLowerCase(),
        path: selectedValue?.replace(/\s/g, '')?.toLowerCase()
      });
      setTimeout(() => {
        console.log(this.saveDataForm.value)
      })
    })
  }

  onSubmit(): void {
    console.log(this.saveDataForm.value)
    this.fcservice.AddCard(this.saveDataForm.value).subscribe((data) => {
      let result = JSON.parse(data)
      this.resetForm();
      this.toastService.show(result.title + ' added Successfully!',{ classname: 'bg-success text-light', delay: 3000 });
    })
  }

  updateData() {
    this.fcservice.updateCard(this.selectedData._id, this.saveDataForm.value).subscribe((data) => {
      this.resetForm();
      this.toastService.show(data.title+' updated Successfully!',{ classname: 'bg-success text-light'});
    })
  }

  setToUpdateItem(updateItem: any) {
    this.updateButton = true
    this.selectedData = updateItem;
    
    this.saveDataForm = this.formBuilder.group({
      
      title: [updateItem.title, Validators.required],
      path: updateItem.path,
      icon: updateItem.icon,
      description: [updateItem.description, Validators.required]
    });
  
  }

  resetForm() {
    this.updateButton = false
    this.saveDataForm.reset()
  }
}

