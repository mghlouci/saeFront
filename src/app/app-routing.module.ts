import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { RechercheAuthorsComponent } from './authors/recherche-authors/recherche-authors.component';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { PublicationsComponent } from './publications/publications.component';
import { RecherchePublicationsComponent } from './publications/recherche-publications/recherche-publications.component';
import { RechercheAffiliationComponent } from './affiliation/recherche-affiliation/recherche-affiliation.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'authors', component: AuthorsComponent},
  { path: 'authors/recherche', component: RechercheAuthorsComponent},
  { path: 'affiliation', component:AffiliationComponent},
  { path: 'affiliation/recherche', component:RechercheAffiliationComponent},
  { path: 'publications', component:PublicationsComponent},
  { path: 'publications/recherche', component: RecherchePublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
