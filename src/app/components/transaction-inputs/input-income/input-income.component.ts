import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-income',
  templateUrl: './input-income.component.html',
  styleUrls: ['./input-income.component.css']
})
export class InputIncomeComponent implements OnInit {

  CATEGORIES: Array<string> = [
    'SAP', 'Tax Return', 'Loan'
  ]
  today: FormControl = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
