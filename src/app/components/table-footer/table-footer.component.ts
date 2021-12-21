import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.css']
})
export class TableFooterComponent implements OnInit {
  @Input() type: string = '';
  @Input() total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
