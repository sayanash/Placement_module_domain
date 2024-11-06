import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Corrected to styleUrls
})
export class AboutComponent {
  collegeName = 'Example College';
  missionStatement = 'To empower our students with the skills and opportunities they need to launch successful careers.';

  statistics = [
    { label: 'Students Placed', value: '500+' },
    { label: 'Partner Companies', value: '100+' },
    { label: 'Average Package', value: '₹8 LPA' },
    { label: 'Highest Package', value: '₹25 LPA' }
  ];

  teamMembers = [
    { name: 'Dr. Jane Doe', position: 'Head of Placement Cell' },
    { name: 'Mr. John Smith', position: 'Corporate Relations Officer' },
    { name: 'Ms. Emily Brown', position: 'Student Coordinator' }
  ];
}
