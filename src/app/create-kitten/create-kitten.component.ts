import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {
  kitten:Kitten = new Kitten("", "", "", "")

  @Output() kittenSender: EventEmitter<Kitten> = new EventEmitter();
  
  AddKitten():void {
    console.log(this.kitten);
    
    this.kittenSender.emit(this.kitten)
    this.kitten = new Kitten("", "", "", "");

  }
}
