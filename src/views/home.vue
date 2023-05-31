<template>
    <div class="container">
        <h1 class="title">Bienvenido</h1>
        <button class="button">Ingresar</button>
        <button class="button">Registrarme</button>
    </div>
</template>
<style scoped lang="scss">
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 50%;
    flex-direction: column;
    background-color: var(--secundary-color);
    @media (min-width: 1023px) {
        width: 40%;
    }
    .title{
        font-size: 34px;
        color: var(--another-color);
        margin-bottom: 4rem;
    }
    .button{
        width: 40%;
        margin-bottom: 2rem;
        height: 40px;
        border-radius: 15px;
        background-color: var(--main-color);
        transition: background-color .5s;
        color: var(--darker-color);
    
        &:hover{
            background-color: var(--lighter-color);
        }
    }
}
</style>