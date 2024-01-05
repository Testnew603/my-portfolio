import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Student Management System',
      technologies: 'C# DotNet Core Api, ADO.net, Sql Server',
      description: [
        'Built the student tracking system including Review, Attendance etc.',
        'Authorization and Authetication were applied.',
        'Password reset using email verfication.',
      ],
    },
    {
      title: 'E-Commerce',
      technologies: 'C# DotNet Core Api, ADO.net, Sql Server, Angular 16, Type Script.',
      description: [
        'Normal E-Commerce System.',
        'Cart product, Buy Product, Cancel Order.',
        'Learned From Youtube.',
      ],
    },
    {
      title: 'Hero Bicycle Mart',
      technologies: 'HTML, CSS, BOOTSTRAP, JS',
      description: [
        'Clone website project',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
