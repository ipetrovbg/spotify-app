import { Component, Input, NgModule,  Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'search-box',
    template: `
    <div class="search-box-component"
        [style.width]="width"        
    >
        <input 
            [(ngModel)]="searchQuery"
            (keyup)="onKey($event)"
            [style.padding]="padding"
            [style.borderColor]="borderColor"
            placeholder="{{ text }}">
        <button 
            (click)="onClear()"
            *ngIf="showClearBtn"
            [style.padding]="padding">x</button>
    </div>
  `,
    styleUrls: ['./app/search-box/css/search-box.min.css'],
})
export class SearchBox implements OnInit {

    @Input('placeholder') text = 'Search';
    @Input('width') width = '100%';
    @Input('borderColor') borderColor = 'black';
    @Input('padding') padding = 5;
    @Input("searchQuery") searchQuery : string;
    showClearBtn = false;
    @Output() searchChange = new EventEmitter();
    @Output() afterClear = new EventEmitter();
    ngOnInit(){
        if(this.searchQuery.length > 0){
            this.showClearBtn = true;
        }
    }
    onKey(event:any) {
                
      this.searchChange.emit({
        value: this.searchQuery
      });
      setTimeout(() => {
            if(event.target.value.length > 0){
                this.showClearBtn = true;
            }else{
                this.showClearBtn = false;
            }
        }, 300);
    }
    onClear(){
        this.searchQuery = '';
        this.afterClear.emit({
            value: this.searchQuery
        });
    }
    
}