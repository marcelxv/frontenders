<template>
    <div class="menu">
        <router-link :to="{name: 'Home'}"><span class="frontenders">'frondenders/></span></router-link>
        <nav>
        <router-link :to="{name: 'Home'}">HOME</router-link>
        <router-link :to="{name: 'About'}">SOBRE</router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.frontenders {
    font-size: 32px;
    font-weight: bold;
    margin: 10px;
    color: #57AD8D;
    letter-spacing: -4px;
}
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    max-height: 200px;
    width: 100%;
    margin-bottom: 50px;
}
.logo {
    width: 80px;
}
nav {
    padding: 0.5rem 1rem;
}
nav a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
}
</style>