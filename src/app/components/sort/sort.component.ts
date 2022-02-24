import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortType: EventEmitter<string> = new EventEmitter<string>();

  onChange(value: string) {
    this.sortType.emit(value);
  }
}
