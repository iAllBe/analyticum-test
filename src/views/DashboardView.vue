<template>
  <h1>Dashboard</h1>
  {{ getOrder }}
  <nav>
    <router-link class="button" to="/cardCreate">Добавить карточку</router-link>
  </nav>
  <div
    v-for="category in categories"
    :key="category.id"
    @drop="onDrop($event, category.id)"
    class="dashboard droppable"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      v-for="item in items.filter((x) => x.categoryId == category.id)"
      @dragstart="onDragStart($event, item)"
      class="draggable"
      draggable="true"
    >
      <Card :name="item.name" :desc="item.desc"></Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { ref } from "vue";

export default {
  name: "DashboardView",
  components: {
    Card,
  },
  setup() {
    const items = ref([
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
    ]);
    const categories = ref([
      {
        id: 1,
      },
      { id: 2 },
    ]);

    function onDragStart(e, item) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id.toString());
    }
    function onDrop(e, categoryId) {
      const itemId = parseInt(e.dataTransfer.getData("itemId"));
      items.value = items.value.map((x) => {
        if (x.id == itemId) {
          x.categoryId = categoryId;
        }
        return x;
      });
    }

    return {
      items,
      categories,
      onDragStart,
      onDrop,
    };
  },
  computed: {
    ...mapState(["cards"]),
    ...mapGetters(["getOrder"]),
  },
  methods: {
    ...mapMutations(["ADD_CARD", "INCREASE_ORDER_CARD"]),
    increaseOrderCard() {
      this.INCREASE_ORDER_CARD();
    },
  },
  created() {
    setTimeout(
      (function () {
        if (window.localStorage) {
          if (!localStorage.getItem("firstLoad")) {
            localStorage["firstLoad"] = true;
            window.location.reload();
          } else localStorage.removeItem("firstLoad");
        }
      })(),
      1
    );

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(JSON.parse(localStorage.getItem(key)));
      this.ADD_CARD(JSON.parse(localStorage.getItem(key)));
    }
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

.droppable {
  background: green;
  padding: 5px;
  margin: 5px;
}

.draggable {
  background: blanchedalmond;
  padding: 5px;
  margin: 5px;
}
</style>
