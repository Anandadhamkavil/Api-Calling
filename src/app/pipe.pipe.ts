import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(allusers: any[], searchKey: string, propName: string): any[] {
    const result: any = [];
    if (!allusers || searchKey == '' || propName == '') {
      return allusers;
    }
    allusers.forEach((user: any) => {
      if (
        user[propName].trim().toLowerCase().includes(searchKey.toLowerCase())
      ) {
        result.push(user);
      }
    });

    return result;
  }

}
