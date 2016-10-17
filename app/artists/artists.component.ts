import { Component, Input,  Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HasImage } from './filter.pipe';
import globals = require('../globals');
import { Shorter } from '../filters/shorter.pipe';
declare const module;
@Component({
    selector: 'artist',
    moduleId: module.id,
    templateUrl: 'templates/artists.component.tpl.html',
    styleUrls: ['styles/artists.components.css',],
})

export class ArtistComponent {
    
    @Input("name") name: string = 'Maroon 5';
    @Input("artistValue") artistValue = this.name;
    @Input("artists") artists: any;

}