import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { ArtistComponent } from './artists/artists.component';
import { SearchBox } from './search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import { HasImage } from './artists/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ArtistComponent, SearchBox, HasImage ],
  bootstrap:    [ AppComponent ],
  providers:    [],
})
export class AppModule {}