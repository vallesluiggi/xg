import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Cat } from '../interfaces/Icat';
import { imageCats } from '../interfaces/IImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: Cat[] = [];
  images: imageCats[] = [];
  selectedOption : string | null = null;
  dataCat : Cat | null = null
  loading = true; 
  loadingCarousel = false;
  error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data: Cat[]) => {
        this.content = data;
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

  onSelect() {
    this.onSelectCat();
    this.loadingCarousel = true; 
    let id = this.selectedOption  ? this.selectedOption : '';
     this.userService.getPublicContentImages(id).subscribe({
      next: (data: imageCats[]) => {
        this.images = data;
        this.loadingCarousel = false; 
      },
      error: err => {
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
        this.loadingCarousel = false; 
      }
    });
  }

  onSelectCat() { 
    let id = this.selectedOption  ? this.selectedOption : '';
    this.userService.getPublicContentById(id).subscribe({
      next: (data: Cat) => {
        this.dataCat = data;  
      },
      error: err => {
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
