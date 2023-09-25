<template>
    <div class="userContainer">
        <h2>* ADD FRUITS *</h2>
        <input type="text" placeholder="Enter Fruit Name"><br>
        <input type="number" placeholder="Enter Quantity"><br>
        <button @click="()=>{this.$router.push('/list')}" class="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>

<style scoped>
input {
    margin-bottom: 20px;
    padding: 5px 10px;
    font-size: 14px;
}

input:focus {
    outline: none;
}

.submit {
    background-color: lightgreen;
    outline: none;
    border: none;
    padding: 7px 30px;
    border-radius: 20px;
}

.userContainer {
    text-align: center;
    margin-top: 60px;
    padding: 20px;
    border: 1px solid red;
}</style>