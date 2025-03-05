import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}
  getAllExperiences() {
    return [
      {
        Company__Image: './assets/education/routeacademy.jpeg',
        Company__Image__Alt: 'Route Academy',
        Company__Website: 'https://www.linkedin.com/company/routeacademy/',
        Company__Name: 'Route Academy',
        Learning: [
          'The Core Of Front-End ( HTML , CSS, JavaScript ).',
          'Angular Framework .',
          'C# Programming and Advanced C# features like async/await, LINQ, and lambda expressions .',
          'Building web applications using the Model-View-Controller (MVC) design pattern. .',
          'Entity Framework Core, Object-relational mapping (ORM) to interact with databases.  .',
          'Web APIs with ASP.NET Core:, Creating RESTful APIs to expose data to frontend applications.  .',
          'Implementing authentication and authorization with ASP.NET Identity.  .',

        ],
        Start__Date: 'Oct 2023',
        End__Date: 'Oct 2024',
        Jop__Title: 'FullStack Developer intern',
        Jop__Type: 'Remote',
        Jop__Desc:
          'As a FullStack Develper intern at Route Academy, I Learn Front-End With Angular Framework and The Back-End With Asp.NET .',
        EndMessage:
          'Through my internship Other than learning to write code, I learned clean code and submitting assignments before their deadline..',
      },
      {
        Company__Image: './assets/gammalTech.png',
        Company__Image__Alt: 'Gammal Tech company',
        Company__Website: 'https://www.linkedin.com/company/gammal-tech/',
        Company__Name: 'Gammal Tech',
        Learning: [
          'Learning The Basics of Programming Using C / C++ Language.',
          'Learning Object Oriented Programming (Abstraction, Inheritance, Polymorphism, Encapsulation) .',
          'Learning Data Structures (Array, Stack, Queue, Linked List ...) .',
          'Learning Algorithms (Sorting, Searching, Greedy Algorithms, Dynamic Programming ... ) .',
          'Learning Basics of Entrepreneurship  .',
        ],
        Start__Date: 'Jun 2022',
        End__Date: 'Jun 2023',
        Jop__Title: 'Software Engineer Intern',
        Jop__Type: 'Remote',
        Jop__Desc:
          'In This role as a Software Engineer Intern, I focus on Learning The Fundamentals of Computer Science , Solving Problems.',
        EndMessage:
          'This role has strengthened my ability to Think Logicaly and learn the technologies easily .',
      },

    ];
  }
}
