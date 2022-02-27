import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {
  onSearchChange: Subject<string> = new Subject<string>();

  normalize(source: string) {
    const accent = [
        /[\300-\306]/g,
        /[\340-\346]/g, // A, a
        /[\310-\313]/g,
        /[\350-\353]/g, // E, e
        /[\314-\317]/g,
        /[\354-\357]/g, // I, i
        /[\322-\330]/g,
        /[\362-\370]/g, // O, o
        /[\331-\334]/g,
        /[\371-\374]/g // U, u
      ],
      noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

    for (let i = 0; i < accent.length; i++) {
      source = source.replace(accent[i], noaccent[i]);
    }

    return source.toLowerCase();
  }
}
