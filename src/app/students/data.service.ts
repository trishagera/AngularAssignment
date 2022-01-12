import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Student } from './student.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getData() {
    return of(data);
  }

}

const data: Student[] = [ {
  name: 'aaaa',
  class: 10,
  section: 'A',
  english: 95,
  maths: 98,
  science: 99
},
{
  name: 'bbbb',
  class: 10,
  section: 'B',
  english: 85,
  maths: 88,
  science: 100
},
{
  name: 'aabbaa',
  class: 9,
  section: 'A',
  english: 90,
  maths: 89,
  science: 79
},
{
  name: 'adddaaa',
  class: 11,
  section: 'C',
  english: 88,
  maths: 77,
  science: 89
},
{
  name: 'iiiii',
  class: 10,
  section: 'F',
  english: 76,
  maths: 83,
  science: 70
},
{
  name: 'sssss',
  class: 11,
  section: 'H',
  english: 91,
  maths: 87,
  science: 84
}
]
