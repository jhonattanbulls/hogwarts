import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  currentYear: any;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  transform(value:any) {
    var age = (value) ? this.currentYear - value : 0;
    return age == 0 ? '' : age;
  }

}
