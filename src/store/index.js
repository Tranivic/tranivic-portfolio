import { createStore } from 'vuex';
import { getCalApi } from '@calcom/embed-react';

const store = createStore({
  state: {
    calApi: null,
    works: [
      {
        name: "Discord B10-bot",
        description: "This is a Discord bot project created with JavaScript. The goal of this project is the challenge to integrate openAI api into bot responses when user request.",
        technologies: ['Disc.js', 'Node', 'JS', 'OpenAI'],
        link: 'https://github.com/Tranivic/discord-B10-bot',
        underConstruction: true,
        image: 'https://camo.githubusercontent.com/b73ed4d012ae8f7d49d05a3a0616fc8298e23b15d7ebd23fe91249ee6f27b403/68747470733a2f2f692e696d6775722e636f6d2f54305475466a762e6a7067'
      },
      {
        name: "Vue Auth Form",
        description: "This Vue application is a dummy authentication app that uses Vuex, Vue Store, and Firebase. The purpose of this app is to help developers improve their Vue authentication skills",
        technologies: ['Vuejs', 'Firebase', 'Axios'],
        link: 'https://github.com/Tranivic/vue-auth-form',
        underConstruction: false,
        image: 'https://i.imgur.com/TWwI9cv.png'
      },
      {
        name: "Vue Cripto App",
        description: "This Vue app was made for a inter aplication, using a criptocurrency api as a database, you can search for the actual currency price on the website.",
        technologies: ['Vuejs', 'CriptoAPI', 'Tailwind', 'Axios'],
        link: 'https://github.com/Tranivic/vue-auth-form',
        underConstruction: true,
        image: 'https://i.imgur.com/67hbPtx.png'
      }
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
