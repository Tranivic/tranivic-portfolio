import { createStore } from 'vuex';
import axios from 'axios';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

// Module imports
import calApiModule from './modules/cal_api';
import languageModule from './modules/language';

const store = createStore({
    modules: {
        calApiModule: calApiModule,
        languageModule: languageModule,
    },
    state: {
        cvDownloadTimes: 0,
        works: [],
        posts: [],
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
        getDownloadTimes(state) {
            return state.cvDownloadTimes;
        },
        getPosts(state) {
            return state.posts;
        },
        getLatestPosts(state) {
            const latestsPosts = [];
            for (let i = 0; i <= 1; i++) {
                latestsPosts.push(state.posts[i]);
            }
            return latestsPosts;
        }
    },
    mutations: {
        setWorks(state, payload) {
            payload.forEach((element) => {
                state.works.push(element);
            });
        },
        increeseDownloadTimes(state) {
            state.cvDownloadTimes++;
        },
        setPosts(state, payLoad) {
            state.posts = payLoad;
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response = await fetch('https://gql.hashnode.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.VUE_APP_HASHNODE_ACESS_TOKEN,
                    },
                    body: JSON.stringify({
                        query: `query Publication {
                            publication(host: "victortrani.hashnode.dev") {
                               isTeam
                               title
                               posts(first: 10) {
                                 edges {
                                   node {
                                     title
                                     brief
                                     url
                                     coverImage {
                                       url
                                     }
                                   }
                                 }
                               }
                            }
                           }`}),
                });
                const data = await response.json();
                const fetchedPosts = []
                data.data.publication.posts.edges.forEach(el =>{
                    fetchedPosts.push({
                        ...el.node
                    })
                })
                commit('setPosts', fetchedPosts);
            } catch (err) {
                console.log(err);
            }
        },
        async postMessage({ rootGetters }, payLoad) {
            const errorResponseMsg = rootGetters.getSelectedLanguage === 'en' ? 'Failed to send message, sorry. Try again later...' : 'O envio da mensagem falhou, tente novamente mais tarde...';
            const sucessResponseMsg = rootGetters.getSelectedLanguage === 'en' ? 'Thanks for reaching out!' : 'Obrigado por entrar em contato!';
            try {
                const response = await fetch(
                    'https://personal-portifoil-default-rtdb.firebaseio.com/messages.json',
                    {
                        method: 'POST',
                        body: JSON.stringify(payLoad),
                    }
                );
                if (response.ok) {
                    return sucessResponseMsg;
                }
                if (!response.ok) {
                    throw new Error(errorResponseMsg);
                }
            } catch (err) {
                return err.message;
            }
        },
        async fetchProjects({ commit }) {
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
        printEasterEgg() {
            const easterEggMessage = 'Victor Trani - 2023';
            figlet.parseFont('standard', standard);
            figlet.text(
                easterEggMessage,
                {
                    font: 'standard',
                },
                function (_, esterEgg) {
                    console.log(esterEgg);
                }
            );
        },
    },

});

export default store;
