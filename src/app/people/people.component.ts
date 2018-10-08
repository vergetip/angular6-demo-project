import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Person } from '../person';
import { Info } from '../info';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() gender: string;
  people: Array<Person>;
  selectedNames: [""];
  nameDetails: Info;
  selectedGender: string;
  form: FormGroup;
  searchText: string;

  constructor(
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private personService: PersonService) { }
      
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getPeople(routeParams.gender);
      this.nameDetails = new Info
      this.searchText = ''
      })
  }

  getPeople(gender: string): void {
    this.personService.getByGender(gender)
      .subscribe(people => {
        this.people = people;
        console.log(this.people);
        const controls = this.people.map(c => new FormControl(false));
        this.form = this.formBuilder.group({
          people: new FormArray(controls)
        });          
      });
  }

  submit() {
    this.selectedNames = this.form.value.people
      .map((v, i) => v ? this.people[i].name : null)
      .filter(v => v !== null);

    console.log(this.selectedNames);
    if (this.selectedNames && (this.selectedNames.length > 0)) {
      this.getInfo();
    }
    else{
      console.log('empty details')
      this.nameDetails = new Info
    }
  }

  getInfo(): void {
    this.personService.getInfo(this.selectedNames)
      .subscribe(result => {this.nameDetails = result; console.log(result.RelatedTopics)});
  }
  
}
