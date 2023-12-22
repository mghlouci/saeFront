import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheAuthorsComponent } from './graphe-authors.component';

describe('GrapheAuthorsComponent', () => {
  let component: GrapheAuthorsComponent;
  let fixture: ComponentFixture<GrapheAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapheAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapheAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
