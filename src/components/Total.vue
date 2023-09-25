<template>
    <div class="totalContainer">
        <div class="total">Total : {{total}}</div>
    </div>
</template>

<script>
export default {
    name : "Total",
    data(){
        return{
            total : 1000
        }
    }
}
</script>
<style scoped> 
 .total{
    text-align: center;
    font-weight: bold;
    border: 1px solid black;
 }
</style>