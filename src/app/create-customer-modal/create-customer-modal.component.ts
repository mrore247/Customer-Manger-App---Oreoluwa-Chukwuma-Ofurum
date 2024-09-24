import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomer } from '../interfaces/customer';

@Component({
  selector: 'app-create-customer-modal',
  templateUrl: './create-customer-modal.component.html',
  styleUrl: './create-customer-modal.component.css',
})
export class CreateCustomerModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICustomer,
    public dialogRef: MatDialogRef<CreateCustomerModalComponent>
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
