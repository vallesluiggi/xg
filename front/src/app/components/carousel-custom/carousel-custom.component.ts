import { Component, Input, OnInit } from '@angular/core';
import { imageCats } from '../../interfaces/IImage';

@Component({
  selector: 'app-carousel-custom',
  templateUrl: './carousel-custom.component.html',
  styleUrl: './carousel-custom.component.css'
})
export class CarouselCustomComponent implements OnInit {
  @Input() slides: imageCats[] = [];
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void { }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}