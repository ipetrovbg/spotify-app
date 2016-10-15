import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HasImage } from './filter.pipe';
import globals = require('../globals');
@Component({
    selector: 'artist',
    templateUrl: globals.appUri + '/artists/templates/artists.component.tpl.html',
    styleUrls: ['app/artists/styles/artists.components.css',],
    outputs: ['artistChange:change']
})

export class ArtistComponent {
    @Input("name") name: string = 'Maroon 5';
    @Input("artistValue") artistValue = this.name;
    @Input("artists") artists: any; 
/*    @Input() refresh = new EventEmitter();

    change(e){
      console.log(e);
    }*/ 
}