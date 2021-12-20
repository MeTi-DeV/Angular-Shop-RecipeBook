import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // commente 1 : create new property of header component that useable from outside
 @Output() featureSelected=new EventEmitter<string>();
// comment 2 : and here put  onSelected data to featureSelected property
onSelected(feature:string){
this.featureSelected.emit(feature);
}
  constructor() { }

  ngOnInit(): void {
  }

}
