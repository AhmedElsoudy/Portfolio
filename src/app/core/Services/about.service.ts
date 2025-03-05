import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  getAboutDetails() {
    return {
      title:
        '- Frontend developer with a passion for UI design, Problem Solving, and Self-Learning.',
      description: [
        'Frontend developer passionate about UI design, Problem Solving, and Learning. I love solving complex problems and expanding my skill set. I strive to create high-quality, maintainable code that meets industry standards and am always eager for new challenges to grow as a developer.',
        'I graduated with a degree in accounting, but my interest in software development led me to pursue a career in tech. My curiosity drives me to constantly learn, improve, and seek out new challenges in my professional journey.',
      ],
      about: {
        Address: 'Minya, Egypt',
        Birth: '22-12-2001',
        Military: 'Unexempted from military service',
      },
      currentFoucs: [
        {
          name: 'ASP.NET Core',
          link: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
        },
        {
          name: 'Angular',
          link: 'https://angular.dev/',
        },
        {
          name: 'UI UX Design',
          link: '#',
        },
        {
          name: 'Problem Solving',
          link: 'https://codeforces.com/profile/ahmed_king',
        },
      ],
      endMessage:
        'I look forward to connecting and collaborating with others in the tech space!',
    };
  }
  getMyCurrentAge() {
    let d = new Date('12-22-2001');
    let nowD = new Date();
    return nowD.getFullYear() - d.getFullYear();
  }
}
