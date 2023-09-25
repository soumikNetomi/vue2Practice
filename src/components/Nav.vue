<template>
    <div class="navContainer">
            <div class="logo">Nav-Bar</div>
        <div class="linkContainer">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/user">User</router-link>
            <router-link class="link" to="/list">List</router-link>
            <router-link class="link" to="/total">Total</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : "NavBar"
}
</script>

<style scoped>
.navContainer{
    border: 1px solid green;
    padding: 20px 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.linkContainer{
    text-align: right;
    display: flex;
    flex-direction: row;
}
.link{
   margin-left: 70px;
   font-size: 18px;
}
.logo{
    font-size: 25px;
    font-weight: bold;
}
</style>