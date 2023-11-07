import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAuthorsComponent } from './recherche-authors.component';

describe('RechercheAuthorsComponent', () => {
  let component: RechercheAuthorsComponent;
  let fixture: ComponentFixture<RechercheAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
