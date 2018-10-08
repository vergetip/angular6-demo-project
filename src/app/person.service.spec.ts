import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { PersonService } from './person.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('PersonService', () => {
  let personService: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PersonService]
    });

    personService = TestBed.get(PersonService);
  });

  it('should be created', () => {
    expect(personService).toBeTruthy();
  });

 // Add tests for getByGender() method
 describe('getByGender', () => {
  it('should return a collection of people depand on gender', () => {
    const peopleResponse = [
      {
        name: 'Jane',
        surname: 'Murgoci',
        gender: 'male',
        region: 'Romania'
      },
      {
        name: 'Alexej',
        surname: 'Pawlak',
        gender: 'male',
        region: 'Slovakia'
      }
    ];
    let response;
    spyOn(personService, 'getByGender').and.returnValue(of(peopleResponse));

    personService.getByGender('male').subscribe(res => {
      response = res;
    });

    expect(response).toEqual(peopleResponse);
  });
 });

 // Add tests for getInfo() method
 describe('getInfo', () => {
  it('should return the info about specific names', () => {
    const infoResponse = [
      {
        "AnswerType" : "",
        "RelatedTopics" : [
           {
              "Text" : "Jack the Ripper The best-known name for an unidentified serial killer generally believed to have been active in...",
              "FirstURL" : "https://duckduckgo.com/Jack_the_Ripper",
              "Icon" : {
                 "Width" : "",
                 "URL" : "https://duckduckgo.com/i/1442c228.jpg",
                 "Height" : ""
              },
              "Result" : "<a href=\"https://duckduckgo.com/Jack_the_Ripper\">Jack the Ripper</a>The best-known name for an unidentified serial killer generally believed to have been active in..."
           }
        ],
        "DefinitionSource" : "",
        "DefinitionURL" : "",
        "AbstractText" : "",
        "Entity" : "",
        "Image" : "",
        "Redirect" : "",
        "Answer" : "",
        "AbstractSource" : "Wikipedia",
        "Abstract" : "",
        "Results" : [],
        "ImageWidth" : 0,
        "Type" : "D",
        "Heading" : "Jack",
        "AbstractURL" : "https://en.wikipedia.org/wiki/Jack",
        "Definition" : "",
        "ImageHeight" : 0                   
      }
    ];
    let response;
    spyOn(personService, 'getInfo').and.returnValue(of(infoResponse));

    personService.getInfo(['Jack']).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(infoResponse);
  });
 });

});
