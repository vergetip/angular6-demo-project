import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

   return items.filter(function(item) {
    for(let property in item){
      if (item[property] === null){
        continue;
      }
      if(item[property].toString().toLowerCase().includes(searchText.toLowerCase())){
        return true;
      }
    }
    return false;
   });
  }
}