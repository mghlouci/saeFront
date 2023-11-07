import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm) {
      this.router.navigate(['/publications/recherche'], { queryParams: { query: this.searchTerm } });
    }
  }

}
