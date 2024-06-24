<template>
  <form class="create-form" @submit.prevent>
    <h1>Создание карточки</h1>
    <div class="create-form__col">
      <input v-model="name" type="text" placeholder="Наименование" />
      <input v-model="desc" type="text" placeholder="Описание" />
      <span class="error-message">{{ errorMessage }}</span>
    </div>
    <div class="create-form__row">
      <button class="button" type="submit" @click="createCard()">
        Создать карточку
      </button>
      <button class="button" type="submit" @click="cancel()">Отменить</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "CardCreateView",
  components: {
    ...mapGetters(["getOrder"]),
  },
  data() {
    return {
      name: "",
      desc: "",
      errorMessage: "Заполните все поля",
    };
  },
  methods: {
    createCard() {
      if (this.name == "" || this.desc == "") {
        let name = document.querySelector(".error-message");
        name.style.display = "block";
      } else {
        const card = {
          id: Date.now(),
          name: this.name,
          desc: this.desc,
          order: this.getOrder,
        };

        console.log(card);

        this.ADD_CARD(card);
        this.$router.push({ name: "home" });

        localStorage.setItem("user" + Date.now(), JSON.stringify(card));

        this.INCREASE_ORDER_CARD();
      }
    },
    cancel() {
      this.$router.push({ name: "home" });
    },

    ...mapMutations(["ADD_CARD", "INCREASE_ORDER_CARD"]),
  },
};
</script>

<style scoped lang="scss">
.create-form {
  &__col,
  &__row {
    padding: 20px;
    gap: 10px;
    display: flex;
    justify-content: center;
  }

  &__col {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
  }
}

.error-message {
  display: none;
  color: red;
}
</style>
