import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Muhammed Fazil'],
    ['DOB', '17/03/1995'],
    ['Work exp', 'Fresher'],
    ['Education', 'MCA'],
    ['Interests', 'Travel'],
  ] ;

  aboutMe: string[] = [
    'Web Developer specializing in front and back end development. Experienced with all stages of the development cycle for dynamic web projects.',
    'Well-versed in programming languages including HTML5, Bootstrap, MAT-UI, OOP, JavaScript, CSS, SSMS, Angular. ',
    'Perceived as versatile, unconventional and committed, I am looking for new and interesting programming challenges.',
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
