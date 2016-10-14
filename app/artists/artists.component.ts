import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { FormsModule } from '@angular/forms';
import globals = require('../globals');
@Component({
    selector: 'artist',
    templateUrl: globals.appUri + '/artists/templates/artists.component.tpl.html',
    styleUrls: ['app/artists/styles/artists.components.css',],
    // outputs: ['artistChange:keyup']
})

export class ArtistComponent implements OnInit {
    constructor(private dataService: SpotifyService) {}

    public artists = [];

    ngOnInit() {
        this.dataService
            .fetchArtists(this.name, this.items)
           .subscribe(
               (response) => this.artists = response.artists.items
           );
    }

    @Input("items") items = 10;
    @Input("name") name: string = 'Maroon 5';
    @Input("artistValue") artistValue: string = 'Maroon 5';

    @Output() artistChange = new EventEmitter();

    change(e){

      this.dataService
            .fetchArtists(e.target.value, this.items)
           .subscribe(
               (response) => this.artists = response.artists.items
           );
           console.log(this.artistValue);

      this.artistChange.emit({
        value: e.target.value
      })
    }
}