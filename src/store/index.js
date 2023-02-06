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
        exercice() {
            return (exoId) => {
                return 'Nom exo' + exoId;
            };
        },
    }
});

export default store; 