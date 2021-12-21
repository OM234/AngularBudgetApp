import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableExpensesComponent } from './components/table-expenses/table-expenses.component';
import { TableIncomeComponent } from './components/table-income/table-income.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableExpensesComponent,
    TableIncomeComponent,
    TableHeaderComponent,
    TableFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
