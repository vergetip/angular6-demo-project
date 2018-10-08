import { TestBed, inject } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let personService: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService]
    });

    personService = TestBed.get(PersonService);
  });

  it('should be created', () => {
    expect(personService).toBeTruthy();
  });
});
