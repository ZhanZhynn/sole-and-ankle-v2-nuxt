<template>
  <header>
    Free Shipping on domestic orders over RM100!
    <label>
      <span class="visually-hidden"> Search </span>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="value1" placeholder="Search" size="small" />
      </IconField>
    </label>
    <a href="/">Help</a>
    <a href="/" class="pi pi-shopping-cart"></a>
  </header>
</template>

<script setup lang="ts">
import "primeicons/primeicons.css";

const value1 = ref("");
</script>

<style scoped>
header {
  display: flex;
  padding: 4px 16px 4px 16px;
  gap: 16px;
  align-items: baseline;
  background-color: black;
  color: white;
}

label {
  margin-left: auto;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
