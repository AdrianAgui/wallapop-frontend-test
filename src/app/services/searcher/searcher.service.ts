import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {
  onSearchChange: Subject<string> = new Subject<string>();
}
