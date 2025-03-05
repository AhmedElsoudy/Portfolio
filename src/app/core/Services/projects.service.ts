import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getAllProjects() {
    return {

      Angular16__Projects: [
        {
          Project__Name: 'FreshMarket',
          Project__image: './assets/FreshMarket/FreshMarket.png',
          Project__Description:
            'E-commerce Application develop with angular 16',
          Project__Repo:
            'https://github.com/AhmedElsoudy/E-commerce-app',
          Project__Demo:
            ' https://ahmedelsoudy.github.io/E-commerce-app/',
          Project__Technologies: [
            'Ui (display data)',
            'Authentication',
            'wishList',
            'Cart',
            'Address',
            'Make Order',
            'Brands',
            'Categories',
          ],
        },
        {
          Project__Name: 'Simple Design',
          Project__image: './assets/CookiesDesign/CookiesDesign.png',
          Project__Description: 'Simple Angular Design for routing and SPA',
          Project__Repo:
            'https://github.com/AhmedElsoudy/Angular',
          Project__Demo: 'https://ahmedelsoudy.github.io/Angular/',
          Project__Technologies: [
            'Angular 16',
            'TypeScript',
            'HTML5',
            'CSS3',
            'Bootstrap5',
          ],
        },
      ],

      Jquery__Projects: [
        {
          Project__Name: 'Yummy Recipes website',
          Project__image: 'assets/Yummy/Yummy.png',
          Project__Description:
            'jQuery Js Apis and validition and many other topics',
          Project__Repo:
            'https://github.com/AhmedElsoudy/Yummy-Recipes',
          Project__Demo:
            'https://ahmedelsoudy.github.io/Yummy-Recipes/',
          Project__Technologies: [
            'HTML5',
            'Css3',
            'Bootstrap5',
            'JavaScript',
            'jQuery',
          ],
        },
        {
          Project__Name: 'Egyption Party',
          Project__image: 'assets/Party/Party.png',
          Project__Description:
            'simple site test jquery methods and count down for spacific date and validation for letters in textarea',
          Project__Repo: 'https://github.com/AhmedElsoudy/Egyptian-Party',
          Project__Demo: 'https://ahmedelsoudy.github.io/Egyptian-Party/',
          Project__Technologies: [
            'HTML5',
            'Css3',
            'Bootstrap5',
            'JavaScript',
            'jQuery',
          ],
        },
      ],

      PureJs__Projects: [
        {
          Project__Name: 'Weather live',
          Project__image: 'assets/Weather/Weather.png',
          Project__Description:
            'Weather App using weather api to generate weather for any location live with search',
          Project__Repo: 'https://github.com/AhmedElsoudy/Weather-app',
          Project__Demo: 'https://ahmedelsoudy.github.io/Weather-app/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Login Page',
          Project__image: 'assets/regex/regex.png',
          Project__Description:
            'Login and Signup page using Regular Expression',
          Project__Repo:
            'https://github.com/AhmedElsoudy/Pure-Login',
          Project__Demo:
            'https://ahmedelsoudy.github.io/Pure-Login/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Bookmarker',
          Project__image: 'assets/Bookmarker/Bookmarker.png',
          Project__Description: 'CRUD Saving links in local storage',
          Project__Repo: 'https://github.com/AhmedElsoudy/CRUD-system',
          Project__Demo: 'https://ahmedelsoudy.github.io/CRUD-system/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Quote',
          Project__image: 'assets/Quote/Quote.png',
          Project__Description: 'Random Quote Generator',
          Project__Repo:
            'https://github.com/AhmedElsoudy/Quotes',
          Project__Demo:
            'https://ahmedelsoudy.github.io/Quotes/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
      ],

      MVC__Projects: [
        {
          Project__Name: 'Mini System',
          Project__image: 'assets/MVC/CrudMVC.png',
          Project__Description:
            'Mini System App it Simulate Crud Operations Using ASP.Net MVC Technology',
          Project__Repo: 'https://github.com/AhmedElsoudy/S03-Project-MVC',
          Project__Demo: 'http://mvc01project.runasp.net/',
          Project__Technologies: ['HTML5', 'Css3', 'JQuery', 'C#', 'MVC'],
        }

      ],
      API__Projects: [
        {
          Project__Name: 'Mini System',
          Project__image: 'assets/api/api.png',
          Project__Description:
            'Mini E-Commerce App it Simulate E-commerce application Using ASP.Net Api Technology',
          Project__Repo: 'https://github.com/AhmedElsoudy/Talabat.App.API',
          Project__Demo: 'https://github.com/AhmedElsoudy/Talabat.App.API/',
          Project__Technologies: [ 'C#', 'Api','Redis'],
        }

      ],


    };
  }
}
