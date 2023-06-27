import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { SocketioService } from 'src/assets/backupfiles/socketio.service';
import { ToastService } from 'src/app/comman/toast/toast.service';
import { ConfirmationDialogService } from 'src/app/comman/confirmation-dialog/confirmation-dialog.service';
import { ProductService } from 'src/app/services/product/product.service';
import SeedProduct from 'src/assets/script/seed-product' 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  saveDataForm: FormGroup;

  updateButton: boolean = false;
  selectedData: any = {}
  alternateUrl: any = "https://www.shutterstock.com/image-vector/no-image-available-sign-internet-260nw-261719003.jpg"

  @Output() updateItemEvent = new EventEmitter<string>();

  productList: any = []
  setSingleItem: any = null;
  page = 1;


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    public toastService: ToastService,
    private confirmationDialogService: ConfirmationDialogService,
    private socketService: SocketioService,
  ) {
    this.createForm()
  }

  createForm(): any {
    this.saveDataForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: "",
      description: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
    
    this.getAllProducts();
    this.socketService.setupSocketConnection();
    
    this.productService.seedData(SeedProduct).subscribe((data) => { })

  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  getAllProducts() {
    this.productService.GetAllProduct().subscribe((data) => {
      console.log(data)
      this.productList = data?.response;
    });
  }

  onSubmit(): void {
    console.log(this.saveDataForm.value)
    this.productService.AddProduct(this.saveDataForm.value).subscribe((data) => {
      let result = JSON.parse(data)
      this.resetForm();
      this.toastService.show(result.name + ' added Successfully!', { classname: 'bg-success text-light', delay: 3000 });
    })
  }

  updateData() {
    this.productService.updateProduct(this.selectedData._id, this.saveDataForm.value).subscribe((data) => {
      this.resetForm();
      this.toastService.show(data.name + ' updated Successfully!', { classname: 'bg-success text-light' });
    })
  }

  setToUpdateItem(updateItem: any) {
    this.updateButton = true
    this.selectedData = updateItem;

    this.saveDataForm = this.formBuilder.group({
      name: [updateItem.name, Validators.required],
      price: [updateItem.price, Validators.required],
      description: [updateItem.description, Validators.required]
    });
  }

  resetForm() {
    this.updateButton = false
    this.saveDataForm.reset()
  }

  selectItem(data: any) {
    this.productService.GetProduct(data._id).subscribe((data) => {
      this.setSingleItem = data
    })
  }

  deleteItem(data: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete ' + data.name + ' ?')
      .then((confirmed) => {
        if (confirmed) {
          this.productService.deleteProduct(data._id).subscribe((data) => {
            console.log(data)
            this.toastService.show(data.msg,
              { classname: data.delete ? 'bg-success text-light' : 'bg-danger text-light', delay: 3000 }
            );
          })
        }
      })
      .catch(() => '');
  }

  updateItem(data: any) {
    this.updateButton = true
    this.selectedData = data;

    this.saveDataForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      price: [data.price, Validators.required],
      description: [data.description, Validators.required]
    });
  }


  
}






