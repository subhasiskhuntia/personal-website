import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  noOfYears:number=2;
  constructor(){
    const currentYear = new Date().getFullYear();
    this.noOfYears=currentYear-2022;
  }
  openLink(name:"linkedIn" | "github" | "mail"){
    let urlMap={
      "linkedIn":"https://www.linkedin.com/in/subhasis-khuntia-19b029182/",
      "github":"https://github.com/subhasiskhuntia",
      "mail":`mailto:subhasiskhuntia506@gmail.com`
    }
    window.open(urlMap[name], '_blank', 'noopener,noreferrer');
  }

}
