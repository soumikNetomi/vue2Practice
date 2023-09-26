import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10,
        list: [],
        fruits: ["apple", "banana", "mango"],
        price: [50, 20, 30]
    },
    actions: {
        increment(context, payload) {
            context.commit("updateCount", payload);
        },
        addList(context, payload) {
            context.commit("updateList", payload)
        }
    },
    mutations: {
        updateCount(state, payload) {
            this.state.count = state.count + payload;
        },

        updateList(state, payload) {
            console.log("list...", state.list)
            console.log("payload....", payload);
            this.state.list = [...state.list, payload]
        }
    },
    getters: {
        getFruitById: (state) => (id) => {
            return state.fruits[id];
        },
        getPriceById: (state) => (id) => {
            return state.price[id];
        },
        getTotal: (state, getters) => state.list.reduce((total, ele) => {
            total += getters.getPriceById(ele.fruitId) * ele.quantity


            return total
        }, 0)

    }
});
export default store;