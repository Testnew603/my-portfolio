import { Component, OnInit } from '@angular/core';
import { Certification } from '../../models/models';

@Component({
  selector: 'certification',
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent implements OnInit {

  certifications: Certification[] = [
    {
      coursename: 'Software Testing',
      institute: 'Soften Technologies - Cochi',
      duration: ' April 2018 - Oct 2018',
      description: [
        'Evaluation of the software meeting the requirements or not',
        'Manual Testing',
        'Automation Testing',
      ]
    },
    {
      coursename: 'Asp.Net',
      institute: 'Keltron Knowledge Center - Calicut',
      duration: 'Jan 2019 - June 2019',
      description: [
        'Asp.net, WebForms, MVC 4',
        'Sql Server',
      ]
    },
    {
      coursename: 'Indian and Foreign Accounting',
      institute: 'Almis Academy - Kannur',
      duration: '2019 Nov - Mar 2020',
      description: [
        'Indian Accounting with Tax',
        'Payroll and Cost Accounting',
      ]
    },
    {
      coursename: 'Full Stack Web Development',
      institute: 'Bridgeon Solutions - Calicut',
      duration: '2023 May - Jan 2024',
      description: [
        'C# .NET Core Api, ADO.Net, Entity Frame Work.',
        'Sql Server',
        'Angular, Rxj, Ngrx',
        'JavaScript, Type Script'
      ]
    }
  ]

  constructor() { }
  ngOnInit(): void {
    
  }
}
