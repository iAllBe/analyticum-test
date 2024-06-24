import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        name: 'Карточка 1',
        desc: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'
      },
      {
        id: 2,
        name: 'Карточка 2',
        desc: 'Описание 2'
      },
    ],
  },
  getters: {
  },
  mutations: {
    ADD_CARD(state, card) {
      state.cards.push(card);
    }
  },
  actions: {
  },
  modules: {
  }
})
