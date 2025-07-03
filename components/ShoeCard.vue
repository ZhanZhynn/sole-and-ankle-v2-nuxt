<template>
  <article>
    <img :src="imgPath" />
    <section>
      <h4>{{ props.name }}</h4>
      <h4>MYR {{ props.price }}</h4>
      <p>
        {{ props.numcolors }} {{ props.numcolors > 1 ? "colors" : "color" }}
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string;
  imgPath?: string;
  price?: number;
  numcolors?: number;
}>();
</script>

<style scoped>
article {
  margin: 8px;
  border-radius: 16px;
  box-shadow: 0px 2px 24px hsl(0deg 0% 0% / 0.2);
  flex: 1 1 250px;
}

article img {
  border-radius: 12px 12px 0px 0px;
  width: 100%;
}

article section {
  padding: 8px 16px 16px;
}
article h2 {
  margin-bottom: 8px;
}
article p {
  font-weight: 300;
}
</style>
