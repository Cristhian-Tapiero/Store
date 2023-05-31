<script setup>
</script>
<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar{
  display: none;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--main-font);
}
button{
  appearance: none;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
input{
  appearance: none;
  background: none;
  outline: none;
  border: none;
}
.main-container{
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--darker-color);
}
</style>