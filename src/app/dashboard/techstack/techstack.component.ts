import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.css'
})
export class TechstackComponent implements OnInit {
  @Input() type:"Technologies" | "Uses"="Technologies";
  ngOnInit(): void {
    if(this.type=="Uses"){
      this.list=[
        {
          image:"asset/vscode3-svgrepo-com.svg",
          title:"VS Code"
        },
        {
          image:"asset/intellij-idea-svgrepo-com.svg",
          title:"Intellij"
        },
        {
          image:"asset/jira-svgrepo-com.svg",
          title:"Jira"
        },
        {
          image:"asset/bitbucket-svgrepo-com.svg",
          title:"Bitbucket"
        },
        {
          image:"asset/excel-svgrepo-com.svg",
          title:"Excel"
        },
        {
          image:"asset/jupyter-svgrepo-com.svg",
          title:"Jupyter Notebook"
        },
        {
          image:"asset/postman-icon-svgrepo-com.svg",
          title:"PostMan"
        },
        {
          image:"asset/bootstrap-svgrepo-com.svg",
          title:"Bootstrap"
        },
        {
          image:"asset/eclipse-icon-svgrepo-com.svg",
          title:"Eclipse"
        },
        {
          image:"asset/git-svgrepo-com.svg",
          title:"Git"
        },
        {
          image:"asset/jfrog-svgrepo-com.svg",
          title:"JFrog"
        },
        {
          image:"asset/maven-svgrepo-com.svg",
          title:"Maven"
        },
      ]
    }
  }
  list:{image:string,title:string}[]=[
    {
      image:"asset/typescript-icon-svgrepo-com.svg",
      title:"Typescript"
    },
    {
      image:"asset/download.png",
      title:"Spring Boot"
    },
    {
      image:"asset/angular-icon.svg",
      title:"Angular"
    },
    {
      image:"asset/java-svgrepo-com.svg",
      title:"Java"
    },
    {
      image:"asset/aws-svgrepo-com.svg",
      title:"AWS"
    },
    {
      image:"asset/docker-svgrepo-com.svg",
      title:"Docker"
    },
    {
      image:"asset/oracle-svgrepo-com.svg",
      title:"Oracle DB"
    },
    {
      image:"asset/mongodb-svgrepo-com.svg",
      title:"MongoDB"
    },
    {
      image:"asset/kafka-icon-svgrepo-com.svg",
      title:"Kafka"
    },
    {
      image:"asset/graphql-svgrepo-com.svg",
      title:"GraphQL"
    },
    {
      image:"asset/jenkins-svgrepo-com.svg",
      title:"Jenkins"
    },
    {
      image:"asset/openshift-svgrepo-com.svg",
      title:"Openshift"
    },
    {
      image:"asset/python-svgrepo-com.svg",
      title:"Python"
    },
    {
      image:"asset/react-javascript-js-framework-facebook-svgrepo-com.svg",
      title:"React"
    },
    {
      image:"asset/js-svgrepo-com.svg",
      title:"Javascript"
    },
    {
      image:"asset/redis-logo-svgrepo-com.svg",
      title:"Redis"
    },
  ]

}
