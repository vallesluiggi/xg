import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../../interfaces/Icat';

@Component({
  selector: 'app-cat-table-info',
  templateUrl: './cat-table-info.component.html',
  styleUrl: './cat-table-info.component.css'
})
export class CatTableInfoComponent implements OnInit {
  @Input() catData: Cat | null = null;

  constructor() { }
  ngOnInit(): void { }
}
