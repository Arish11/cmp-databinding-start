import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name :'test', content :"test"},{type:"blueprint", name :"test2", content :"test2"}]; 

  addItem(value:{type:string, name :string, content :string}){
    this.serverElements.push({
     type: value.type,
     name: value.name,
     content: value.content
    })
  }
}
