import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheAuthorsComponent } from './authors/recherche-authors/recherche-authors.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { PublicationsComponent } from './publications/publications.component';
import { RecherchePublicationsComponent } from './publications/recherche-publications/recherche-publications.component';
import { RechercheAffiliationComponent } from './affiliation/recherche-affiliation/recherche-affiliation.component';
import { GrapheAuthorsComponent } from './authors/graphe-authors/graphe-authors.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorsComponent,
    HeaderComponent,
    FooterComponent,
    RechercheAuthorsComponent,
    AffiliationComponent,
    PublicationsComponent,
    RecherchePublicationsComponent,
    RechercheAffiliationComponent,
    GrapheAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
