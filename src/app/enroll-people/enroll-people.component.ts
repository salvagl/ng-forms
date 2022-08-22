import { Component } from '@angular/core';

@Component({
  selector: 'app-enroll-people',
  templateUrl: './enroll-people.component.html',
  styleUrls: ['./enroll-people.component.scss']
})
export class EnrollPeopleComponent  {
  people: string[] = [];
  valor:string;

  addPerson() {
    //const personName = input.value;
    const personName = this.valor;
    if (personName) {
      this.people.push(personName);
      //input.value = '';
      this.valor=''
    }
  }

}
