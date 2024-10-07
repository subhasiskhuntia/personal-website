import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectList:{
    title:string,
    description:string,
    images:string[],
    link:string
  }[]=[
    {
      title:"Food Delivery Application",
      description:"Developed a food delivery application featuring user-friendly interfaces for both customers and restaurant owners. Users can browse restaurants, filter options by cuisine and ratings, and place orders seamlessly. Restaurant owners can manage their menus, update listings, and track incoming orders through dedicated dashboards.",
      images:[],
      link:"https://github.com/subhasiskhuntia/Food-Delivery-Application"
    },
    {
      title:"E-commerce Website",
      description:"Built a fully functional e-commerce website that enables users to browse products and search based on brand and gender. Users can apply filters to find specific items, add them to a shopping cart, and complete purchases securely. The platform features user registration and login with JWT authentication and refresh tokens for secure session management, along with Java Mailer for email verification. An admin page allows for efficient product management, including adding, updating, and removing items. This project highlights my ability to create a secure, user-friendly shopping experience with robust search and admin functionalities",
      images:[],
      link:"https://github.com/subhasiskhuntia/E-Commerce-Website-Backend-using-springBoot"
    },
    {
      title:"Social Networking Website",
      description:"Developed a social networking website where users can create profiles, publish posts, and engage with each other through likes and comments. The platform allows users to share updates and express their thoughts, fostering community interaction. Key features include a user-friendly interface for managing friend requests, enabling users to send, accept, or cancel requests easily. Additionally, users can explore a feed of friends' posts, enhancing connectivity. This project emphasizes user engagement and social interaction, creating an inviting space for users to connect and share their experiences.",
      images:[],
      link:"https://github.com/subhasiskhuntia/SocialMediaApplicationFrontEnd"
    },
    {
      title:"Credit Default Prediction",
      description:"Developed a machine learning model that forecasts whether a credit card holder will default on payments in the next month. Utilizing a dataset of 30,000 records, the model analyzes features such as credit limit, payment history, and demographic information. The project addresses class imbalance and employs a Random Forest Classifier for prediction. Key objectives include assessing borrower risk, improving lending decisions, and evaluating model performance using metrics like F1 score and confusion matrix. This model assists financial institutions in managing credit risk effectively.",
      images:[],
      link:"https://github.com/subhasiskhuntia/Default-of-credit-card-client"
    }

  ]
}
