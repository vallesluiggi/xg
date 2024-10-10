import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTableInfoComponent } from './cat-table-info.component';

describe('CatTableInfoComponent', () => {
  let component: CatTableInfoComponent;
  let fixture: ComponentFixture<CatTableInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatTableInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
