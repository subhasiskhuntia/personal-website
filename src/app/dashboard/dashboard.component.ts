import { Component, HostListener } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TitleComponent } from "./title/title.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TechstackComponent } from "./techstack/techstack.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, TitleComponent, TimelineComponent, ProjectsComponent, TechstackComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sideBarButtonClick(type:string){
    const element = document.getElementById(type);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
