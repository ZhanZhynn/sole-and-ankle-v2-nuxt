<template>
  <nav>
    <side><a href="/">Logo Here</a></side>
    <ul>
      <li><a href="/">Sale</a></li>
      <li><a href="/">New Release</a></li>
      <li><a href="/">Men</a></li>
      <li><a href="/">Women</a></li>
      <li><a href="/">Kids</a></li>
      <li><a href="/">Collections</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  display: flex;
  font-size: 1.5rem;
  padding: 4px 16px 4px 16px;
  border-bottom: 2px solid grey;
  min-height: 4rem;
  align-items: center;
  margin-bottom: 50px;
}

.side {
  flex: 1;
}

ul {
  display: flex;
  justify-content: center;
  gap: 4rem;
  list-style-type: none;
  flex: 2 1 100px;
  padding: 0;
  margin-left: -45px;
}

li:first-of-type {
  color: var(--color-primary);
}

a {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
