import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../interfaces/customer';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerModalComponent } from '../create-customer-modal/create-customer-modal.component';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
})
export class CreateCustomerComponent implements OnInit {
  customerFormGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.createCustomerForm();
  }
  createCustomerForm() {
    this.customerFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(18),
        ],
      ],
      address: ['', [Validators.required]],
    });
  }

  createNewCustomer(formData: ICustomer) {
    if (
      formData.address &&
      formData.address.trim() !== '' &&
      formData.email &&
      formData.email.trim() !== '' &&
      formData.name &&
      formData.name.trim() !== '' &&
      formData.phone &&
      formData.phone.trim() !== 'null'
    ) {
      this.customerService.createCustomer(formData).subscribe((data) => {
        console.log(data);
        this.openViewModal(formData);
        this.customerFormGroup.reset();
      });
    }
  }

  openViewModal(customer: ICustomer) {
    this.dialog.open(CreateCustomerModalComponent, {
      width: '400px',
      data: customer,
    });
  }
}
