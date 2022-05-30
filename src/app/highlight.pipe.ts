import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, language:string): string {
    if(language === 'Punjabi'){
      return 'hello punjabis ' + value   
    }else{
      return 'Hello'+ value;
    }
  }

}
