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
                console.log(exoId)
                console.log(exerciceList.includes(exoId))
                return exerciceList.includes(exoId);
            };
        },
    }
});

export default store; 