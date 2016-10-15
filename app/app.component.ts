import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, HttpModule }    from '@angular/http';
import { Observable } from 'rxjs';
import { ArtistComponent } from './artists/artists.component';
import { SpotifyService } from './services/spotify.service';
import { SearchBox } from './search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/Rx';


@Component({
  selector: 'app',
  templateUrl:'./app/app.components.tpl.html',
  providers: [SpotifyService],

})

export class AppComponent implements OnInit  {
	constructor(private dataService: SpotifyService) {}
	/* set some default values */
	public artist: string  = 'Lady Gaga';
	private items: number = 4;
	public artists = [];
	public errorMessage: string;
	ngOnInit() {
	    this.dataService
	        .fetchArtists(this.artist, this.items)
	       .subscribe(
	           (response) => this.artists = response.artists.items
	       );
	}

	refresh(e){
		setTimeout(() => {
			this.dataService
		        .fetchArtists(e.value, this.items)
		       .subscribe(
		           (response) => this.artists = response.artists.items || [{name: "no data", images: [{},{}]}],
		           (error) => this.errorMessage = error
		       );
		}, 100);
	}

	onKeyup(e){
		if(e.value.length === 0){
			e.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
		}
		this.refresh(e);			
	}
	afterClearQuery(event){
		/*change empty value to some very long string and pass it as artist name. The goal is to can`t find anything*/
		event.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
		this.refresh(event);
	}
}