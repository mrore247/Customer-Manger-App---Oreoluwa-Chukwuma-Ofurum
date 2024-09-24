import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildService } from '../services/child.service';
import { CustomerService } from '../services/customer.service';
import { ICustomer, ICustomers } from '../interfaces/customer';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewCustomerModalComponent } from '../view-customer-modal/view-customer-modal.component';
import { EditCustomerModalComponent } from '../edit-customer-modal/edit-customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(
    private formsModule: FormsModule,
    private router: Router,
    private childService: ChildService,
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetCustomer();
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'email',
    'phone',
    'address',
    'actions',
  ];
  dataSource!: ICustomers;

  allRecords!: ICustomers;

  message: string = 'Got this message from customer component';

  searchQuery: string = '';

  goTo() {
    this.router.navigateByUrl('customer/new');
  }

  onGetCustomer() {
    this.customerService.getCustomers().subscribe((data) => {
      this.allRecords = data;
      this.dataSource = this.allRecords;
    });
  }

  searchFilter() {
    const filterValue = this.searchQuery.trim().toLowerCase();

    if (filterValue) {
      this.dataSource = this.dataSource.filter((record) => {
        return (
          record.name.toLowerCase().includes(filterValue) ||
          record.email.toLowerCase().includes(filterValue)
        );
      });
    } else {
      this.dataSource = this.allRecords;
    }
  }

  openViewModal(customer: ICustomers) {
    this.dialog.open(ViewCustomerModalComponent, {
      width: '400px',
      data: customer,
    });
  }

  openEditModal(customer: ICustomers) {
    this.dialog.open(EditCustomerModalComponent, {
      width: '400px',
      data: customer,
    });
  }

  deleteCustomer(id: Number): void {
    if (confirm('Kindly reconfirm that you want to delete customer')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          this.dataSource = this.dataSource.filter(
            (customer) => customer.id !== id
          );
          alert('Customer deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting customer:', err);
          alert('Failed to delete customer');
        },
      });
    }
  }
}
