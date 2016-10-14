import { Component } from '@angular/core';
import { Http, Response, HttpModule }    from '@angular/http';
import { Observable } from 'rxjs';
import { ArtistComponent } from './artists/artists.component';
import { SpotifyService } from './services/spotify.service';
import 'rxjs/Rx';

@Component({
  selector: 'app',
  templateUrl:'./app/app.components.tpl.html',
  providers: [SpotifyService],
})

export class AppComponent {
  
}