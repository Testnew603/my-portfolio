import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  
  skills: Skill[] = [
    {
      name: 'C#, DotNet Core API, WebForms',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'ADO.net, Entity FrameWork',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'SQL Server',
      level: 'Good',
      rating: 90,
    },
    {
      name: 'Angular, RXJ Library',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'JavaScript, TypeScript',
      level: 'Good',
      rating: 75,
    },
    {
      name: 'HTML, CSS, BOOTSTRAP, MAT-UI',
      level: 'Good',
      rating: 85,
    },
  ];

  constructor() { }
  ngOnInit(): void {
    
  }
}
