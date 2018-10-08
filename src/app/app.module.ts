import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleComponent } from './people/people.component';
import { PersonService } from './person.service';

import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
