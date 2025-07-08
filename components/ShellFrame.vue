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
      <div class="shell-header">
        <h2>{{ title }}</h2>
        <div>
          <span>Sort</span>
          <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            class="w-full md:w-14rem"
          />
        </div>
      </div>

      <div class="shoe-card">
        <ShoeCard
          v-for="n in shoeData"
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
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
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
const shoeData = ref<ShoeDetails[] | undefined>(props.data);
const selectedCity = ref({ name: "Newest Releases", code: "NR" });
const cities = ref([
  { name: "Newest Releases", code: "NR" },
  { name: "Colors Available", code: "MR" },
  { name: "Cheapest", code: "C" },
  { name: "Most Expensive", code: "P" },
]);

const title = ref(props.title);

const sortByPrice = (order: number) => {
  const sortedShoe = shoeData.value.slice().sort((a, b) => {
    const priceA = a.salePrice ? a.salePrice : a.price;
    const priceB = b.salePrice ? b.salePrice : b.price;
    if (order > 0) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });
  return sortedShoe;
};

const sortedLatest = () => {
  const sortedShoes = shoeData.value.slice().sort((a, b) => {
    return b.releaseDate - a.releaseDate;
  });
  return sortedShoes;
};

const sortedNumColors = () => {
  const sortedShoes = shoeData.value.slice().sort((a, b) => {
    return b.numOfColors - a.numOfColors;
  });
  return sortedShoes;
};

watch(selectedCity, (selectedFilter) => {
  if (selectedFilter.code == "C") {
    shoeData.value = sortByPrice(1);
  } else if (selectedFilter.code == "P") {
    shoeData.value = sortByPrice(-1);
  } else if (selectedFilter.code == "NR") {
    shoeData.value = sortedLatest();
  } else if (selectedFilter.code == "MR") {
    shoeData.value = sortedNumColors();
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  padding-right: 4rem;
  /* overflow: auto; */
}

.grid {
  flex: 5;
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

.aside > span {
  margin-right: 8px;
}

.shell-header {
  display: flex;
  justify-content: space-between;
}

.shell-header span {
  margin-right: 10px;
}
</style>
