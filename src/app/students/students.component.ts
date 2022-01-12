import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DataService } from './data.service';
import { Student } from './student.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentData: any;
  headers: string[];
  sortedHeader: string;
  sequence: string;
  studentDataCopy: Student[];

  constructor(private dataService: DataService) { 
    this.studentData = [];
    this.studentDataCopy = [];
    this.headers = [];
    this.sortedHeader = '';
    this.sequence = '';
  }

  ngOnInit(): void {
    this.getStudentData();

  }

  getStudentData() {
    this.dataService.getData().subscribe( (res: Student[]) => {
      if(res) {
        this.studentData = res;
        this.studentDataCopy = cloneDeep(this.studentData);
        this.headers = Object.keys(this.studentData[0]);
      }
    })
  }

  public sort(header: string) { 
    if(this.sortedHeader === header) {
      switch(this.sequence) {
        case '' : {
          this.sequence = 'asc';
          break;
        };
        case 'asc' :  {
          this.sequence = 'desc';
          break;
        }
        case 'desc': {
          this.sequence = '';
          header = '';
          break;
        }
      }
    }
    else {
      this.sequence = 'asc'
    }   
    this.sortedHeader = header;
    this.sortData(header);
  }

  public sortData(header: string) {
    switch(this.sequence) {
      case '' : {
        this.studentData = cloneDeep(this.studentDataCopy);
        break;
      }
      case 'asc' : {
        this.studentData.sort((a: any, b: any) => {
          if(typeof a[header] == 'number') {
            return a[header] - b[header]
          }
          else {
            return a[header].localeCompare(b[header]);
          }
        })
        break;
      }
      case 'desc' : {
        this.studentData.sort((a: any, b: any) => {
          if(typeof a[header] == 'number') {
            return b[header] - a[header];
          }
          else {
            return b[header].localeCompare(a[header]);
          }
        })
        break;
      }
    }
  }

}
