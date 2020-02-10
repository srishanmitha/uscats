import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emmployeeFilter'
})
export class FilterPipe implements PipeTransform {
  
  transform(arr:any[],prp:string, searchText:string, method:string){
    if(arr){
              if(!searchText){
                 return arr;
              }else
                return arr.filter(obj=>this.filter((obj)[prp],searchText.toLowerCase(),method as Method));
             }   else
               return[]
      }
    
   filter(source:string, target:string,method:Method):boolean {
     switch(method){
       case "equal" :return source.toLowerCase()===target.toLowerCase();
       case "not-equal":return  source.toLowerCase()!==target.toLowerCase()
   }
   }
   
  }
  type Method = "equal"|"not-equal"

