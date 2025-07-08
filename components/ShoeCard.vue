<template>
  <article>
    <div class="flag">
      <ListFlag v-if="saleVariant != 'default'" :sale-variant="saleVariant" />
    </div>
    <img :src="imgPath" />
    <section>
      <div>
        <h4>{{ props.name }}</h4>
        <h4 v-if="props.salePrice" class="price slash">
          {{ formatNumber(props.price || -1) }}
        </h4>
        <h4 v-else class="price">
          {{ formatNumber(props.price || -1) }}
        </h4>
      </div>
      <div>
        {{ props.numcolors }} {{ props.numcolors > 1 ? "colors" : "color" }}
        <h4 class="price sales">{{ formatNumber(props.salePrice || -1) }}</h4>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string;
  imgPath?: string;
  price?: number;
  salePrice?: number;
  numcolors: number;
  releaseDate: number;
}>();

const saleVariant = ref("default");

const checkVariant = () => {
  if (props.salePrice) {
    saleVariant.value = "sale";
  } else if (isNewRelease(props.releaseDate)) {
    saleVariant.value = "new";
  } else {
    saleVariant.value = "default";
  }
};

checkVariant();
</script>

<style scoped>
article {
  position: relative;
  margin: 8px;
  border-radius: 16px;
  box-shadow: 0px 2px 24px hsl(0deg 0% 0% / 0.2);
  flex: 1 1 400px;
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

section div {
  display: flex;
}
.price {
  margin-left: auto;
  align-self: flex-end;
  padding-left: 8px;
}

.price.slash {
  font-weight: var(--weight-light);
  text-decoration: line-through;
  color: var(--color-gray-700);
}

.price.sales {
  color: deeppink;
}
</style>
