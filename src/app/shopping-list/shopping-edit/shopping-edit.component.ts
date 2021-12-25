import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/sheared/Ingrediant';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  onAddItem() {
    const ingNameInput = this.nameInputRef.nativeElement.value;
    const ingAmountInput = this.amountInputRef.nativeElement.value;
    const newIngredients = new Ingredient(ingNameInput, ingAmountInput);
    this.ingredientAdded.emit(newIngredients);
  }
  constructor() {}

  ngOnInit(): void {}
}
