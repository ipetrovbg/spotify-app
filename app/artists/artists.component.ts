import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HasImage } from './filter.pipe';
import globals = require('../globals');
@Component({
    selector: 'artist',
    templateUrl: './app/artists/templates/artists.component.tpl.html',
    styleUrls: ['./app/artists/styles/artists.components.css',],
})

export class ArtistComponent {
    @Input("name") name: string = 'Maroon 5';
    @Input("artistValue") artistValue = this.name;
    @Input("artists") artists: any;
}