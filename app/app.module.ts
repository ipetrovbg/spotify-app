import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { ArtistComponent } from './artists/artists.component';
import { SearchBox } from './search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import { HasImage } from './artists/filter.pipe';
import { Shorter } from './filters/shorter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2Modal } from './modal/modal';
import { RouterModule }   from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
  NgbModule.forRoot(),
  RouterModule.forRoot([
      { path: 'modal', component: Ng2Modal },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ])
    ],
  declarations: [ AppComponent, ArtistComponent, SearchBox, HasImage, Shorter, Ng2Modal, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [],
})
export class AppModule {}