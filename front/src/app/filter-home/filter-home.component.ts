import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/Icat';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-filter-home',
  templateUrl: './filter-home.component.html',
  styleUrl: './filter-home.component.css'
})
export class FilterHomeComponent  implements OnInit {
  catDataList: Cat[] = [];
  loading = true;  
  error: string = '';
  query: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  filterCats() {
    this.loading = true;
    this.userService.getPublicSearchCats(this.query).subscribe({
      next: (data: Cat[]) => {
        this.catDataList = data;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.error = res.message;
          } catch {
            this.error = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.error = `Error with status: ${err.status}`;
        }
      }
    });
  }

}
