import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-expense',
  templateUrl: './input-expense.component.html',
  styleUrls: ['./input-expense.component.css', '../input-income/input-income.component.css']
})
export class InputExpenseComponent implements OnInit {

  CATEGORIES: Array<string> = [
    'Groceries', 'Entertainment', 'Internet', 'Other'
  ]
  today: FormControl = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
