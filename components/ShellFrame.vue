<template>
  <section class="wrapper">
    <nav>
      <p>Home / Sale / Shoes</p>
      <ul>
        <li>Lifestype</li>
        <li>Jordan</li>
        <li>Running</li>
      </ul>
    </nav>
    <div class="grid">
      <h2>{{ title }}</h2>

      <div class="shoe-card">
        <ShoeCard
          v-for="n in data"
          :key="n.name"
          :name="n.name"
          :img-path="n.imageSrc"
          :price="n.price"
          :numcolors="n.numOfColors"
          :sale-price="n.salePrice"
          :release-date="n.releaseDate"
        />
      </div>
    </div>
    <div class="aside">
      <span>Sort</span>
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        class="w-full md:w-14rem"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
type ShoeDetails = {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number;
  releaseDate: number;
  numOfColors: number;
};

const props = defineProps<{ title?: string; data?: ShoeDetails[] }>();

const selectedCity = ref({ name: "Newest Releases", code: "NR" });
const cities = ref([
  { name: "Newest Releases", code: "NR" },
  { name: "Most Relevant", code: "MR" },
  { name: "Cheapest", code: "C" },
]);

const title = ref(props.title);
</script>

<style scoped>
.wrapper {
  display: flex;
  /* overflow: auto; */
}

.grid {
  flex: 3;
}

.shoe-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}

nav {
  flex: 1;
  padding-left: 20px;
  position: sticky;
  top: 20px;
  height: 0;
}

ul {
  list-style-type: none;
  padding: 30px 0;
}

li {
  padding: 4px 0px;
  font-weight: var(--weight-bold);
}

.aside {
  flex: 1;
}

.aside > span {
  margin-right: 8px;
}
</style>
