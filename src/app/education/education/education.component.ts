import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'NI University',
      course: 'MCA',
      duration: '2016 - 2018', 
      score: ''
    },
    {
      institute: 'Kannur University',
      course: 'BCA',
      duration: '2013 - 2016',
      score: ''
    },
    {
      institute: 'Govt HSS Muzhappilangad',
      course: 'Commerce',
      duration: '2011 - 2013',
      score: ''
    },
    {
      institute: 'AKG Govt HSS Peralassery',
      course: 'SSLC',
      duration: '2010 - 2011',
      score: ''
    },  
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
