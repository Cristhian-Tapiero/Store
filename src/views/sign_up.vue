<template>
    <div class="container">
        <h1 class="title">Registrate</h1>
        <form class="form">
            <input type="text" name="name"  id="name" class="input-text" placeholder="Nombre" required>
            <input type="text" name="phone" id="phone" class="input-text" placeholder="Telefono" required>
            <input type="text" name="address" id="address" class="input-text" placeholder="Direccion" required>
            <input type="email" name="email" id="email" class="input-text" placeholder="Correo" required>
            <input type="password" name="password" id="password" class="input-text" placeholder="Contraseña" required>
            <button class="button">Registrarme</button>
        </form>
        <footer class="advert">Ya estas registrado? <a class="link" @click="$router.push('/LogIn')">Ingresa aqui</a></footer>
    </div>
</template>
<style lang="scss" scoped>
.container{
    border-radius: 15px;
    filter: drop-shadow(0 0 2rem var(--another-color));
    width: 80%;
    height: 80%;
    background-color: var(--secundary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 1023px) {
        width: 50%;        
    }
    .form{
        margin-top: 2rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .input-text{
            height: 45px;
            width: 80%;
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--darker-color);
            transition: background-color .5s, color .5s;
            &:focus{
                background-color: var(--main-color);
                color: var(--darker-color);
            }
            @media (min-width: 1023px) {
                width: 70%;
            }
        }
        .button{
            width: 40%;
            margin-bottom: 2rem;
            height: 40px;
            border-radius: 15px;
            background-color: var(--main-color);
            color: var(--darker-color);
            transition: background-color .5s;

            &:hover{
                background-color: var(--lighter-color);
            }
        }
    }
    .advert{
        margin-bottom: 2rem;
        color: var(--main-color);
        font-size: 15px;
        .link{
            cursor: pointer;
            text-decoration: none;
            color: var(--another-color);
            transition: color .5s;
            &:hover{
                color: var(--another-darker-color);
            }
        }
    }
    .title{
        margin-top: 2rem;
        color: var(--another-color);
    }
}
</style>