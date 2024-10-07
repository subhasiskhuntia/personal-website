import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  clickedButton:"home" | "timeline" | "projects" | "skills" | "uses"='home';
  @Output() emitButtonClick:EventEmitter<string>=new EventEmitter<string>();
  buttonClicked(type:"home" | "timeline" | "projects" | "skills" | "uses"){
    this.clickedButton=type;
    this.emitButtonClick.emit(type);
  }

}
