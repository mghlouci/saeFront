import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recherche-affiliation',
  templateUrl: './recherche-affiliation.component.html',
  styleUrls: ['./recherche-affiliation.component.css'],
  providers: [ ApiService]
})
export class RechercheAffiliationComponent implements OnInit{
  query: string = "";
  affiliation: any;
  publications: Map<String,any> = new Map<string,any>;
  authors: Map<String,any> = new Map<string,any>;


  constructor(private route: ActivatedRoute, private apiService : ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
    });

    this.apiService.getAffiliation(this.query).subscribe((datas) => {
      this.affiliation = datas;
      for(let s of this.affiliation){
        this.getListeGlobalPublications(s.idaff)
        this.getAuthorAffilie(s.idaff)
      }
    })
  }

  getListeGlobalPublications(id:string){
    this.apiService.getListeGlobalPublications(id).subscribe((datas) => {
      this.publications.set(id,datas);
    });
  }

  getAuthorAffilie(id:string){
    this.apiService.getAuthorAffilie(id).subscribe((datas) => {
      this.authors.set(id,datas);
    });
  }
}
