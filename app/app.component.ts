import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { ArtistComponent } from './artists/artists.component';
import { SpotifyService } from './services/spotify.service';
import { SearchBox } from './search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HomeComponent } from './home/home.component'; 

import 'rxjs/Rx';


@Component({
	selector: 'app',
	templateUrl: './app/app.components.tpl.html',
	providers: [SpotifyService],

})

export class AppComponent {
	
}