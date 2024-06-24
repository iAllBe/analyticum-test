<template>
  <form class="create-form" @submit.prevent>
    <h1>Создание карточки</h1>
    <div class="create-form__col">
      <input v-model="name" type="text" placeholder="Наименование" />
      <input v-model="desc" type="text" placeholder="Описание" />
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
import { mapMutations } from "vuex";

export default {
  name: "CardCreateView",
  components: {},
  data() {
    return {
      name: "",
      desc: "",
    };
  },
  methods: {
    createCard() {
      this.ADD_CARD({ id: Date.now(), name: this.name, desc: this.desc });
      this.$router.push({ name: "home" });
    },
    cancel() {
      this.$router.push({ name: "home" });
    },
    ...mapMutations(["ADD_CARD"]),
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.create-form {
  &__col,
  &__row {
    padding: 20px;
    gap: 20px;
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
</style>