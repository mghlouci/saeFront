import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_URL = "http://localhost:8080/api"



  constructor(private httpClient: HttpClient) { }


  getAuthor(req:string){
    return this.httpClient.get(this.API_URL+"/authors/"+req)
  }

  getCoAuthor(id:string|null){
    return this.httpClient.get(this.API_URL+"/authors/"+id+"/coauthors")
  }

  getPublications(id:string){
    return this.httpClient.get(this.API_URL+"/authors/"+id+"/publications")
  }

  getAffiliation(req:string){
    return this.httpClient.get(this.API_URL+"/affiliation/"+req)
  }

  getListeGlobalPublications(id:string){
    return this.httpClient.get(this.API_URL+"/affiliation/"+id+"/publications")
  }

  getAuthorAffilie(id:string){
    return this.httpClient.get(this.API_URL+"/affiliation/"+id+"/authors")
  }

  getPublicationstfidf(req:string){
    return this.httpClient.get(this.API_URL+"/publications/"+req)
  }

  getAffiById(id:string){
    return this.httpClient.get(this.API_URL+"/affiliation/getaffi/"+id)
  }

  getAuthorById(id:string|null){
    return this.httpClient.get(this.API_URL+"/authors/"+id+"/authors")
  }

  getPageRank(id:string|null){
    return this.httpClient.get(this.API_URL+"/authors/"+id+"/pagerank")
  }

  getCoAuthorByAff(idAff:string|null){
    return this.httpClient.get(this.API_URL+"/authors/"+idAff+"/coauthorsbyaff")
  }

}
