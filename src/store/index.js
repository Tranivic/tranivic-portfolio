import { createStore } from 'vuex';
import { getCalApi } from '@calcom/embed-react';

const store = createStore({
  state: {
    calApi: null,
  },
  getters: {},
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
