import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAffiliationComponent } from './recherche-affiliation.component';

describe('RechercheAffiliationComponent', () => {
  let component: RechercheAffiliationComponent;
  let fixture: ComponentFixture<RechercheAffiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAffiliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
