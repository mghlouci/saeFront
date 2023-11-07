import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm) {
      this.router.navigate(['/affiliation/recherche'], { queryParams: { query: this.searchTerm } });
    }
  }

}
