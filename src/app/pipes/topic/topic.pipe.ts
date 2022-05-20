import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var topicsArray = ["dotnet","C#","Angular","ReactJS","Backend","FrontEnd","xamarin"]

    return topicsArray[value];
  }

}
