import { createStore } from 'vuex';

const store = createStore({
    mutations: {
    },
    actions: {
    },
    getters: {
        menu() {
            return require("../json/menu.json");
        },
    }
});

export default store; 