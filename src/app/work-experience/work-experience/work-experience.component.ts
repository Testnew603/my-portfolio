import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {

  workExpList: WorkExperience[] = [
    {
      role: 'Software Tester',
      company: 'Soften Technologies',
      duration: 'Aug 2018 - Oct 2018',
      description: [
        'Intern Trainee.',
        'Manual and Automation Testing.',
      ]
    },
    {
      role: 'Software Tester',
      company: 'Alisons Informatics Pvt Ltd',
      duration: 'Nov 2018 - Jan 2019',
      description: [
        'Under Strict Training as ManualTester.',
        'Projects:',
        'POS, Thanal Matrimony, Fish Mart.',
        'My Shoppe, Green G, X Shoppe, Crown Gallery.' 
      ]
    },
    {
      role: 'Jr Accountant',
      company: 'OASIS Build Mart',
      duration: 'Dec 2019 - Mar 2021',
      description: [
        'Worked as junior accountant.',
        'Inventory, Tax, Payroll, Income Exp Report.',
      ]
    },
    {
      role: 'Jr Accountant',
      company: 'Valencia Marble & Nat Stones',
      duration: 'April 2021 - Mar 2023',
      description: [
        'Worked as junior accountant.',
        'Inventory, Tax, Payroll, Income Exp Report.',
      ]
    }
  ]

  constructor() { }
  ngOnInit(): void {
    
  }
}
