import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'shorter'
})

export class Shorter implements PipeTransform {
    transform(value: string, limit: number, pref: string) {
        if(!limit)
            limit = 50;
        
        if(!pref)
            pref = '';
            
        if (value) {
            
            if (limit > value.length) {
                return value;
            } else {
                if (pref) {
                    return value.slice(0, limit) + pref;
                }

            }
        }
    }
}