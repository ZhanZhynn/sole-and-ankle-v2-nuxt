<template>
  <div :class="props.saleVariant">{{ flagText }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ saleVariant: string }>();

const flagText = ref(props.saleVariant == "sale" ? "Sale" : "Just released!");
</script>

<style scoped>
div {
  position: absolute;
  top: 8px;
  right: -10px;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 2;
  font-weight: var(--weight-medium);
  color: white;
}

.sale {
  background-color: var(--color-primary);
}

.new {
  background-color: var(--color-secondary);
}
</style>
