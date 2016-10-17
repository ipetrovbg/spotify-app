import { Component, OnInit, Input } from '@angular/core'
import { ArtistComponent } from '../artists/artists.component';
import { Observable } from 'rxjs';
import { SearchBox } from '../search-box/search-box.component';
import { SpotifyService } from '../services/spotify.service';
import 'rxjs/Rx';
declare const module;

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: 'home.entryComponents.tpl.html',
    providers: [SpotifyService],
})
export class HomeComponent implements OnInit{
    constructor(private dataService: SpotifyService) { }

    /* set some default values */
	public artist: string = 'Lady Gaga';
	public errorMessage: string;
	private items: number = 20;
	public artists: string[] = [];
	public loader:boolean = false;
	ngOnInit() {
		this.dataService
			.fetchArtists(this.artist, this.items)
			.subscribe(
			(response) => this.artists = response.artists.items
			);
	}

	refresh(e) {
		this.loader = true;
		setTimeout(() => {
			this.dataService
				.fetchArtists(e.value, this.items)
				.subscribe(
				(response) => {
					this.loader = false;
					this.artists = response.artists.items || [{ name: "no data", images: [{}]}]
				},
				(error) => {
					this.loader = false;
					 this.errorMessage = error
					}
				);
		}, 100);
	}

	onKeyup(e) {
		if (e.value.length === 0) {
			e.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
		}
		this.refresh(e);
	}
	afterClearQuery(event) {
		/*change empty value to some very long string and pass it as artist name. The goal is to can`t find anything*/
		event.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
		this.refresh(event);
	}

}