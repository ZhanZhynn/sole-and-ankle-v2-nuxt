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
const props = defineProps<{ title?: string }>();

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
  height: 100vh;
  overflow: auto;
  position: sticky;
  top: 0;
}

.grid {
  flex: 3;
}

nav {
  flex: 1;
  padding-left: 20px;
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
