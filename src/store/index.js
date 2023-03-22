import { createStore } from 'vuex';
import { getCalApi } from '@calcom/embed-react';
import axios from 'axios';

const store = createStore({
  state: {
    calApi: null,
    works: [],
    selectedLanguage: 'en',
    languageObject: {},
  },
  getters: {
    myWorks(state) {
      return state.works;
    },
    selectedWorks(state) {
      let selectedWorkArry = [];
      state.works.forEach((element) => {
        if (element.id === 2 || element.id === 5 || element.id === 7)
          selectedWorkArry.push(element);
      });
      return selectedWorkArry;
    },
    getlanguageObject(state) {
      return state.languageObject;
    },
    getSelectedLanguage(state) {
      return state.selectedLanguage;
    },
  },
  mutations: {
    setWorks(state, payload) {
      payload.forEach((element) => {
        state.works.push(element);
      });
    },
    setlanguageObject(state, payLoad) {
      state.languageObject = payLoad;
    },
    setSelectedLanguage(state, payLoad) {
      state.selectedLanguage = payLoad;
    },
  },
  actions: {
    async integrateCalApi() {
      this.calApi = await getCalApi();
      this.calApi('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    },

    async postMessage(state, payLoad) {
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
          return state.selectedLanguage === 'en'? 'Thanks for reaching out!': 'Obrigado por entrar em contato!';
        }
      } catch (err) {
        return err.message;
      }
    },

    async fetchProjects({ commit, state }) {
      try {
        const path = './locales/projects.json';
        const response = await axios.get(path);

        if (response.status !== 200) {
          throw new Error('Something went wrong!');
        }
        commit('setWorks', response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchLanguage({ commit, state }) {
      try {
        let pathForLanguage = '';
        state.selectedLanguage === 'en'
          ? (pathForLanguage = 'en_us')
          : (pathForLanguage = 'pt_br');
        const path = `./locales/languages/${pathForLanguage}.json`;
        const response = await axios.get(path);
        commit('setlanguageObject', response.data);
      } catch (err) {
        console.log(err);
      }
    },
    changeLanguage({ dispatch, commit, state }) {
      let changedLanguage = '';
      state.selectedLanguage === 'en'
        ? (changedLanguage = 'br')
        : (changedLanguage = 'en');

      if (localStorage.getItem('selectedLanguage')) {
        localStorage.removeItem('selectedLanguage');
      }
      localStorage.setItem('selectedLanguage', changedLanguage);

      commit('setSelectedLanguage', changedLanguage);
      dispatch('fetchLanguage');
    },
  },
});

export default store;
