import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        name: "Карточка 1",
        desc: "Описание 1",
        categoryId: 1,
      },
      {
        id: 2,
        name: "Карточка 2",
        desc: "Описание 2",
        order: 2,
        categoryId: 2,
      },
    ],
    orderCard: 3,
  },
  getters: {
    getOrder(state) {
      return state.orderCard;
    },
  },
  mutations: {
    ADD_CARD(state, card) {
      state.cards.push(card);
    },

    INCREASE_ORDER_CARD(state) {
      state.orderCard++;
    },
  },
  actions: {},
  modules: {},
});
