import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/components/pages/welcome-page/welcome-page.component'
      ).then((c) => c.WelcomePageComponent),
    title: 'Ahmed Gomaa - Portfolio',
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/components/pages/blank/blank.component').then(
        (c) => c.BlankComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./core/components/pages/blank/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Ahmed Gomaa',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./core/components/pages/blank/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'About',
      },
      {
        path: 'experience',
        loadComponent: () =>
          import(
            './core/components/pages/blank/experience/experience.component'
          ).then((c) => c.ExperienceComponent),
        title: 'Experience',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import(
            './core/components/pages/blank/projects/projects.component'
          ).then((c) => c.ProjectsComponent),
        title: 'Projects',
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./core/components/pages/blank/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
        title: 'Skills',
      },
      {
        path: 'education',
        loadComponent: () =>
          import(
            './core/components/pages/blank/education/education.component'
          ).then((c) => c.EducationComponent),
        title: 'Education',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './core/components/pages/blank/contact/contact.component'
          ).then((c) => c.ContactComponent),
        title: 'Contact',
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./core/components/pages/blank/resume/resume.component').then(
            (c) => c.ResumeComponent
          ),
        title: 'Resume',
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/components/shared/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
    title: 'Ahmed Gomaa - notfound',
  },
];
