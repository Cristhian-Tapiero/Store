<template>
    <div class="container-loading">
        <div class="loading"></div>
        <section class="price-section">
            <div class="loading-price"></div>
        </section>
        <section class="description">
            <div class="loading-description"></div>
            <div class="loading-description"></div>
            <div class="loading-description"></div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.container-loading{
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 1px solid black;
    .loading{
        margin-top: 1rem;
        width: 70%;
        height: 50%;
        background-image: linear-gradient(90deg, rgb(97, 97, 97), rgb(51, 50, 50));
        background-size: 400%, 400%;
        align-self: center;
        animation: resplandor 1s linear infinite alternate;
    }
    .price-section{
        width: 70%;
        align-self: center;
        .loading-price{
            margin-top: 1rem;
            width: 40%;
            position: relative;
            height: 1rem;
            background-image: linear-gradient(90deg, rgb(97, 97, 97), rgb(51, 50, 50));
            background-size: 400%, 400%;
            animation: resplandor 1s linear infinite alternate;
        }
    }
    .description{
        align-self: center;
        margin-top: 1rem;
        width: 70%;
        margin-bottom: 1rem;
        .loading-description{
            margin-top: .5rem;
            width: 100%;
            height: .5rem;
            background-image: linear-gradient(90deg, rgb(97, 97, 97), rgb(51, 50, 50));
            background-size: 400%, 400%;
            animation: resplandor 1s linear infinite alternate;
        }
    }
    @keyframes resplandor {
        0%{
            background-position: 0%,50%;
        }50%{
            background-position: 50%, 50%;
        }100%{
            background-position: 100%, 100%;
        }
    }
}
</style>