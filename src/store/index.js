import { createStore } from 'vuex';
import { getCalApi } from '@calcom/embed-react';

const store = createStore({
  state: {
    calApi: null,
    works: [
      {
        name: "Discord B10-bot",
        description: "This is a Discord bot project created with JavaScript. The goal of this project is the challenge to integrate openAI api into bot responses when user request.",
        technologies: ['Discord.js', 'Node', 'Javasctipt', 'OpenAI'],
        link: 'https://github.com/Tranivic/discord-B10-bot',
        underConstruction: true,
        image: 'https://i.imgur.com/Ny8ujwo.png'
      },
      {
        name: "Vue Cripto App",
        description: "This Vue app was made for a inter aplication, using a criptocurrency api as a database, you can search for the actual currency price on the website.",
        technologies: ['Vuejs', 'CriptoAPI', 'Tailwind', 'Axios'],
        link: 'https://cripto-project.vercel.app/',
        underConstruction: true,
        image: 'https://i.imgur.com/HvN8VEM.png'
      },
      {
        name: "Bumbleboot Landing Page",
        description: "This is a project made for test some sass skills. I found this landing page on the Internet and try to copy. I've used JavaScript and sass. The challenge in this project was to create the particles effects in header using @keyframes.",
        technologies: ['Html', 'Css', 'Js', 'Sass'],
        link: 'https://bumblebot.netlify.app/',
        underConstruction: false,
        image: 'https://i.imgur.com/8kuoP9l.png'
      },
      {
        name: "Vue Auth Form",
        description: "This Vue application is a dummy authentication app that uses Vuex, Vue Store, and Firebase. The purpose of this app is to help developers improve their Vue authentication skills",
        technologies: ['Vuejs', 'Firebase', 'Axios'],
        link: 'https://auth-app-vue.netlify.app/',
        underConstruction: false,
        image: 'https://i.imgur.com/MSv4CvK.png'
      },
      {
        name: "AWS Selfie Inverter",
        description: "Project created to facilitate an activity at work, the app automatically inverts the selfies of the document sent by the customer.",
        technologies: ['Html', 'Css', 'Js'],
        link: 'https://document-selfie-inverter.netlify.app/',
        underConstruction: false,
        image: 'https://i.imgur.com/WV7PSdQ.png'
      },
      {
        name: "Fake Store Landing Page",
        description: "This is a simple to do list made with javascript, i tried to not use any tutorial like 'how build a to do list', only following my logic and searching for how things work in javascript. I've learned a lot about DOM manipulation, sass and more.",
        technologies: ['Jquery', 'Bootstrap','Js'],
        link: 'https://tranivic.github.io/fakestore-website/',
        underConstruction: false,
        image: 'https://i.imgur.com/zZEZ0Un.png'
      },
      {
        name: "Entregue-me Front end",
        description: "Front-end of Ecommerce under construction, i'm creating the frontend of a food delivery, the project is not finished yet, this project is to be released this year. The backend is under construction by a friend.",
        technologies: ['Vue', 'Router', 'Vuex', 'Sass', 'Axios'],
        link: 'https://github.com/Tranivic/entregue.me-frontend',
        underConstruction: true,
        image: 'https://i.imgur.com/h8EVXph.png'
      },
      {
        name: "Todo List",
        description: "This is a simple to do list made with javascript, i tried to not use any tutorial like 'how build a to do list', only following my logic and searching for how things work in javascript. I've learned a lot about DOM manipulation, sass and more.",
        technologies: ['Html', 'Sass', 'Css', 'Js'],
        link: 'https://tranivic.github.io/to-do-list/',
        underConstruction: false,
        image: 'https://i.imgur.com/8B8d5Ub.png'
      },      
    ]
  },
  getters: {
    myWorks(state) {
      return state.works
    }
  },
  mutations: {},
  actions: {
    async integrateCalApi() {
      this.calApi = await getCalApi();
      this.calApi('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    },
    async postMessage(_, payLoad) {
      try {
        const response = await fetch(
          'https://personal-portifoil-default-rtdb.firebaseio.com/messages.json',
          {
            method: 'POST',
            body: JSON.stringify(payLoad),
          }
        );
        if (!response.ok) {
          throw new Error('Failed to send message, sorry. Try again later!');
        } else {
          console.log(response)
          return 'Thanks for reaching out! ';
        }
      } catch (err) {
        return err.message;
      }
    },
  },
});

export default store;
