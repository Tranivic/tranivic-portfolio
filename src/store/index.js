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
      console.log('chamei');
      this.calApi = await getCalApi();
      this.calApi('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    },
    async fetchCurriculum() {
    const response = await fetch('../../src/assets/files/Teste.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Teste.pdf');
    document.body.appendChild(link);
    link.click();
    }
  },
});

export default store;
