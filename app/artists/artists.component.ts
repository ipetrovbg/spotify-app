import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'artist',
    templateUrl: './app/artists/artists.component.tpl.html',
})

export class ArtistComponent implements OnInit {
    constructor(private dataService: SpotifyService) {

    }

    public artists = [];

    ngOnInit() {
        this.dataService
            .fetchArtists('Marron', this.items)
           .subscribe(
               (response) => this.artists = response.artists.items
           );
    }

    @Input("items") items = 10; 
}