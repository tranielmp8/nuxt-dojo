<template>
  <div>
    
    <h2>About Page</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem laudantium voluptas distinctio unde accusantium ab harum ex labore ipsa quis.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem laudantium voluptas distinctio unde accusantium ab harum ex labore ipsa quis.</p>
    <div>{{data}}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }

</style>