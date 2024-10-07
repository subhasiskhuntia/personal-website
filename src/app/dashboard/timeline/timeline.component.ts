import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  timeLine:{
    year:string,
    title:string
  }[]=[
    {year:"2018-2022",title:"Graduated: B.Tech from VSSUT"},
    {year:"2022-present",title:"Software Engineer @Wipro"}
  ]
}
