import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss'],
})
export class ListKittenComponent {
  kittenList: Kitten[] = [];
  displayForm: boolean = false;
  adoptedKittenList: Kitten[] = [];

  onGetKitten(kitten: Kitten): void {
    this.kittenList.push(kitten);
  }

  adoption(adoptedKitten: Kitten):void {
    this.adoptedKittenList.push(adoptedKitten);

    const ind = this.kittenList.indexOf(adoptedKitten)
    if (ind !== -1) {
      this.kittenList.splice(ind, 1);
    }
  }
}
