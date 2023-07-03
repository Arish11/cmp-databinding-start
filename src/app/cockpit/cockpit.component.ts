import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements = []
  @ViewChild('newServerName') newServerName:ElementRef
  @ViewChild('newServerContent')   newServerContent : ElementRef
  @Output() newItemEvent = new EventEmitter<{type:string, name :string, content :string}>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName.nativeElement.value,
      content: this.newServerContent.nativeElement.value
    });
    this.newItemEvent.emit(this.serverElements.pop())
  }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  //   this.newItemEvent.emit(this.serverElements.pop())
  // }


  //You can either save the newly added server locally which is not recommended or
  //you can implement the event emmiter directly like below. It will work in both the cases
  onAddBlueprint(event){
    this.newItemEvent.emit({ type: 'blueprint',
      name: this.newServerName.nativeElement.value,
      content: this.newServerContent.nativeElement.value})
  }
  
}
