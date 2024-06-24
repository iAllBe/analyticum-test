<template>
  <h1>Dashboard</h1>
  <nav>
    <router-link class="button" to="/cardCreate">Добавить карточку</router-link>
  </nav>
  <div class="dashboard">
    <div v-for="card in cards" :key="card.id">
      <Card :name="card.name" :desc="card.desc"></Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  name: "DashboardView",
  components: {
    Card,
  },
  computed: {
    ...mapState(["cards"]),
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 23%;
    margin: 1%;
  }
}
</style>