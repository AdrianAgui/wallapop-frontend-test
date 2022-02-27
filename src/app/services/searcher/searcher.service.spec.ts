import { TestBed } from '@angular/core/testing';

import { SearcherService } from './searcher.service';

describe('SearcherService', () => {
  let service: SearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when normalize string', () => {
    it('should remove accents and upper case', () => {
      const normalizedText = service.normalize('Éstò és Ún téXto sÍn noRMALizAr');
      expect(normalizedText).toBe('esto es un texto sin normalizar');
    });
  });
});
