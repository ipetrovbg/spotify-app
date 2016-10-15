import { Component, Input, NgModule,  Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
    selector: 'search-box',
    templateUrl: './app/search-box/search-box-tmpl.html',
    styleUrls: ['./app/search-box/css/search-box.min.css'],
})
export class SearchBox implements OnInit {

    @Input('placeholder') text = 'Search';
    @Input('width') width = '100%';
    @Input('borderColor') borderColor = 'black';
    @Input('padding') padding = 5;
    @Input("searchQuery") searchQuery : string;
    
    @Output() searchChange = new EventEmitter();
    @Output() afterClear = new EventEmitter();

    public term = new FormControl();
    public showClearBtn: boolean = false;
    public showOnTypeing: boolean = false;
    
    ngOnInit(){
        if(this.searchQuery.length > 0){
            this.showClearBtn = true;
        }
    }
    onKey(event:any) {
        this.showOnTypeing = true;
        this.term.valueChanges
            .debounceTime(500)
            .subscribe( term => {
                this.showOnTypeing = false;
                    return this.searchChange.emit({
                        value: this.searchQuery
                    })
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