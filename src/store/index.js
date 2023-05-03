import { createStore } from 'vuex';
import { getCalApi } from '@calcom/embed-react';
import axios from 'axios';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

const store = createStore({
  state: {
    cvDownloadTimes: 0,
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
    getDownloadTimes(state) {
      return state.cvDownloadTimes;
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
    increeseDownloadTimes(state) {
      state.cvDownloadTimes++;
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

    async postMessage({ state }, payLoad) {
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
          return state.selectedLanguage === 'en'
            ? 'Thanks for reaching out!'
            : 'Obrigado por entrar em contato!';
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

    setVisitor({ dispatch }) {
      const currentDate = new Date().toString();
      if (!localStorage.getItem('visitorIdentifier')) {
        const newVisitor = Math.floor(Math.random() * 10000);
        localStorage.setItem('visitCount', 1);
        localStorage.setItem('visitorIdentifier', newVisitor);
        const obj = {
          visitorId: newVisitor,
          visitCount: 1,
          lastDateVisiting: currentDate,
        };
        dispatch('postVisitor', obj);
      } else {
        const visitor = localStorage.getItem('visitorIdentifier');
        let timesVisited = parseInt(localStorage.getItem('visitCount'));
        timesVisited++;
        localStorage.setItem('visitCount', timesVisited.toString());
        const obj = {
          visitorId: visitor,
          visitCount: timesVisited,
          lastDateVisiting: currentDate,
        };
        dispatch('postVisitor', obj);
      }
    },

    async postVisitor({}, visitorObj) {
      try {
        await axios.put(
          `https://personal-portifoil-default-rtdb.firebaseio.com/visitors/${visitorObj.visitorId}.json`,
          {
            timesVisited: visitorObj.visitCount,
            lastVisit: visitorObj.lastDateVisiting,
          }
        );
      } catch (err) {
        console.error(err);
      }
    },

    printEasterEgg() {
      const easterEggMessage = 'Victor Trani - 2023';
      figlet.parseFont('standard', standard);
      figlet.text(
        easterEggMessage,
        {
          font: 'standard',
        },
        function (_, data) {
          console.log(data);
        }
      );
    },
  },
});

export default store;
