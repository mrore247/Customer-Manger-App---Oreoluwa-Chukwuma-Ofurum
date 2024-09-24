import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './customer/sharedModules/material/material.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ViewCustomerModalComponent } from './view-customer-modal/view-customer-modal.component';
import { CreateCustomerModalComponent } from './create-customer-modal/create-customer-modal.component';
import { EditCustomerModalComponent } from './edit-customer-modal/edit-customer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreateCustomerComponent,
    ChildComponent,
    ViewCustomerModalComponent,
    CreateCustomerModalComponent,
    EditCustomerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
