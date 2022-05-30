import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { DeleteLoansComponent } from './delete-loans/delete-loans.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from '@angular/common/http'
import { UsersModule } from './users/users.module'
import { LayoutModule } from './layout/layout.module';
import { ContentComponent } from './content/content.component';
import { HighlightPipe } from './highlight.pipe'

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
    LoansTypesComponent,
    AddLoansComponent,
    EditLoansComponent,
    DeleteLoansComponent,
    ProductsComponent,
    HomeComponent,
    ClientComponent,
    SearchComponent,
    ErrorComponent,
    ContentComponent,
    HighlightPipe,
  ],
  imports: [
    LayoutModule,
    UsersModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
