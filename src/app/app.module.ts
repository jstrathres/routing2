import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = 
[
  {
    path: 'people', component: PeopleComponent
  },
  {
    path: 'people/:id', component: PeopleDetailComponent
    //must match to an ID/#
  },
  {
    path: '', redirectTo: '/people', pathMatch:'full'
    // empty quotes for homepage
  },
  {
    path: '**', component: PageNotFoundComponent
    //wildcard path
  },
];

@NgModule
({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
