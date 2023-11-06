import { Pipe, PipeTransform } from "@angular/core";
//  ---- create optional and mandatory arguments 
@Pipe({
  name:"testPipe",
  pure:true
})
export class TestPipe implements PipeTransform{


transform(value: any,...args: any[]) {
return value + ' new ';
}

}