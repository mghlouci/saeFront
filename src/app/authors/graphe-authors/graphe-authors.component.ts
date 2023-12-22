import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-graphe-authors',
  templateUrl: './graphe-authors.component.html',
  styleUrls: ['./graphe-authors.component.css'],
  providers: [ApiService]
})
export class GrapheAuthorsComponent implements OnInit {

  id: string | null = null;
  author: any;
  coauthor: any;
  coauthorByaff: any;
  pagerank: Map<String, any> = new Map<string, any>;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.apiService.getAuthorById(this.id).pipe(
      switchMap((datas) => {
        this.author = datas;
        return this.apiService.getCoAuthorByAff(this.author.affiliation);
      })
    ).subscribe((datas) => {
      this.coauthorByaff = datas;
    });

    this.apiService.getCoAuthor(this.id).subscribe((datas) => {
      this.coauthor = datas;
    });

    this.apiService.getPageRank(this.id).subscribe((datas) => {
      this.pagerank.set(this.author.id, datas);
    });

    for (let a of this.coauthor) {
      this.apiService.getPageRank(a.id).subscribe((datas) => {
        this.pagerank.set(a.id, datas);
      });
    }

    for (let a of this.coauthorByaff) {
      this.apiService.getPageRank(a.id).subscribe((datas) => {
        if(a.id!=this.id)
        this.pagerank.set(a.id, datas);
      });
    }
  }
}
