<template>
  <article>
    <img src="https://courses.joshwcomeau.com/cfj-mats/dog-one-300px.jpg" />
    <section>
      <h2>The One Weird Trick to get tasty dinner scraps</h2>
      <p>
        Step one: Find the friendliest human at the dinner table. Step two: Give
        them sad pupper eyes. Step 3: Get slid human food on the sly.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts"></script>

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
