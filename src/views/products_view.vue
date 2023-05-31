<script setup>
import ProductCard from '../components/product_card.vue'
let number = 8
</script>
<template>
    <div class="container-grid">
            <ProductCard v-for="i in number"/>
    </div>
</template>
<style lang="scss" scoped>
.container-grid{
    position: relative;
    align-items: center;
    justify-items: center;
    left: calc(2rem + 32px);
    width: calc(100% - 32px - 2rem);
    height: 100%;
    overflow-y: scroll;
    display: grid;
    grid-auto-rows: minmax(40vh, 45vh);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (min-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(33vh, 45vh);
    }
}</style>