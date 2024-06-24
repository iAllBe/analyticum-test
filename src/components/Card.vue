<template>
  <div class="card">
    <h3 class="card__name">{{ name }}</h3>
    <div class="card__desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    desc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  height: 115px;
  overflow: hidden;
  text-overflow: ellipsis;

  &__name {
    font-size: 18px;
  }

  &__desc {
    font-style: italic;
    word-wrap: break-word;
  }
}
</style>
