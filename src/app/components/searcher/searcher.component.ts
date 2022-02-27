import { Component } from '@angular/core';
import { SearcherService } from '../../services/searcher/searcher.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  inputHasText = false;

  constructor(private readonly searcherService: SearcherService) {}

  filterChange(event: any) {
    this.inputHasText = event.value !== '';
    this.searcherService.onSearchChange.next(event.value);
  }

  focusInput() {
    document.getElementById('filter')?.focus();
  }
}
