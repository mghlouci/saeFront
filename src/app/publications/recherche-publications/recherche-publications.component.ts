import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recherche-publications',
  templateUrl: './recherche-publications.component.html',
  styleUrls: ['./recherche-publications.component.css'],
  providers: [ ApiService]
})
export class RecherchePublicationsComponent implements OnInit{
  query: string = "";
  publications: any;

  constructor(private route: ActivatedRoute, private apiService : ApiService) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
    });

    this.apiService.getPublicationstfidf(this.query).subscribe((datas) => {
      this.publications = datas;
    })
  }


}
