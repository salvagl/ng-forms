import { Component } from '@angular/core';

@Component({
  selector: 'app-enroll-people',
  templateUrl: './enroll-people.component.html',
  styleUrls: ['./enroll-people.component.scss']
})
export class EnrollPeopleComponent  {
  people = [];

  addPerson(personName: string) {
    if (personName) {
      this.people.push(personName);
    }
  }

}
