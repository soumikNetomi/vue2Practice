<template>
    <div class="totalContainer">
        <div class="total">Total : {{ $store.getters.getTotal }}</div>
    </div>
</template>

<script>

export default {
    name: "Total",
    data() {
        return {
            total: this.$store.state.count
        }
    },
    computed:{
        updatedTotal(){
           return this.$store.state.count 
        }
    }
}
</script>
<style scoped>
.totalContainer{
    margin-top:20px ;
}
.total {
     text-align: center;
     font-weight: bold;
     border: 1px solid black;
 }
</style>