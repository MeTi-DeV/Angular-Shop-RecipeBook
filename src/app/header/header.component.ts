import { Component, Output, OnInit ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featurSelected= new EventEmitter<string>();
onSelected(feature:string){
this.featurSelected.emit(feature);
}
  constructor() { }

  ngOnInit(): void {
  }

}
