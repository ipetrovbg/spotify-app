import { Pipe, PipeTransform  } from '@angular/core';
import {Observable} from 'rxjs/Observable';
@Pipe({
	name: 'hasImage'
})

export class HasImage implements PipeTransform{
	newData: string[] = [];
	transform(value){
		return value.filter(item => {
			item.state = 'inactive'
			return (item.images.length > 0)
		})
		};
	}