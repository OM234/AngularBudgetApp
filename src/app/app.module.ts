import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableExpensesComponent } from './components/table-expenses/table-expenses.component';
import { TableIncomeComponent } from './components/table-income/table-income.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { TableExpensesTotalComponent } from './components/table-expenses-total/table-expenses-total.component';
import { DelayDirective } from './directives/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableExpensesComponent,
    TableIncomeComponent,
    TableHeaderComponent,
    TableFooterComponent,
    TableExpensesTotalComponent,
    DelayDirective
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
