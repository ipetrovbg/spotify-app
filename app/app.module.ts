import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { ArtistComponent } from './artists/artists.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ArtistComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [],
})
export class AppModule {}