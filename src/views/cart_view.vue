<template>
    <div class="cart-container">
        <h1 class="title">Carrito</h1>
    </div>
</template>
<style scoped lang="scss">
.cart-container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: calc(100vw - 32px - 2rem);
    left: calc(2rem + 32px);

    .title{
        text-align: center;
    }
}
</style>