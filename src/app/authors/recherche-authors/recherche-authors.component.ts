import { Component, NgIterable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recherche-authors',
  templateUrl: './recherche-authors.component.html',
  styleUrls: ['./recherche-authors.component.css'],
  providers: [ ApiService]
})
export class RechercheAuthorsComponent implements OnInit {
  query: string = "";
  author: any;
  coauthor: Map<String,any> = new Map<string,any>;
  publications: Map<String,any> = new Map<string,any>;
  affiliation: Map<String,any> = new Map<string,any>;

  constructor(private route: ActivatedRoute, private apiService : ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
    });

    this.apiService.getAuthor(this.query).subscribe((datas) => {
      this.author = datas;
      for(let s of this.author){
        this.getCoauthors(s.id)
        this.getPublications(s.id)
        if(s.affiliation!=null)
          this.getAffiliation(s.affiliation)
      }
    })
  }

  getCoauthors(id : string){
     this.apiService.getCoAuthor(id).subscribe((datas) => {
      this.coauthor.set(id,datas);
    });
  }

  getPublications(id : string){
    this.apiService.getPublications(id).subscribe((datas) => {
     this.publications.set(id,datas);
    });
  }

  getAffiliation(id: string){
    this.apiService.getAffiById(id).subscribe((datas) => {
      this.affiliation.set(id,datas);
     });
  }
}
