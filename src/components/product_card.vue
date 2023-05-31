<template>
    <div class="container">
        <section class="imagen"></section>
        <section class="price-section">
            <h2 class="precio">$200.000</h2>
        </section>
        <section class="description-section">
            <p class="description">Imagen de contorno gris oscuro para Cristhian Tapiero Padilla</p>
        </section>
        <section class="botones">
            <button class="button">Fav</button>
            <button class="button">Carrito</button>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    .imagen{
        margin-top: 1rem;
        width: 80%;
        height: 50%;
        background-color: gray;
    }
    .price-section{
        width: 70%;
        .precio{
            margin-top: 1rem;
        }
    }
    .description-section{
        width: 70%;
        .description{
            margin-top: .5rem;
            font-size: small;
        }
        
    }
    .botones{
        margin-bottom: 1rem;
        margin-top: 1rem;
        width: 70%;
        display: flex;
        justify-content: space-between;
        .button{
            background-color: purple;
            width: 40%;
            height: 30px;
            border-radius: 15px;
            transition: background-color .5s;
            &:hover{
                background-color: rgb(93, 3, 93);
            }
        }
    }
}
</style>