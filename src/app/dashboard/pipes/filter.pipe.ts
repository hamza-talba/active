import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contacts.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Contact[], searchText: string): any[] {
     if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter(it => {
       return (
        it.name.toLocaleLowerCase().includes(searchText) ||
        it.phone.toLocaleLowerCase().includes(searchText) ||
        it.favorite.toString().includes(searchText) ||
        it.email.toLocaleLowerCase().includes(searchText)
       )
    });
  }

}
