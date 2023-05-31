<script setup>
import NavBar from '../components/navigation_bar.vue';
</script>
<template>
    <div class="principal-container">
        <NavBar />
        <router-view/>
    </div>
</template>
<style lang="scss" scoped>
.principal-container{
    background-color: white;
    position: relative;
    width:100vw;
    height: 100vh;
    display: flex;
    main{
        flex: 1 1 0;
        padding: 2rem;
    }
}
</style>