<template>
    <div class="listContainer">
        <table>
            <thead>
                <tr>
                    <th>SN</th>
                    <th>Fruit</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="(ele,index) in $store.state.list" :key=index>
                    <td>{{index+1}}</td>
                    <td>{{$store.getters.getFruitById(ele.fruitId)}} </td>
                    <td>{{ele.quantity}}</td>
                    <td>{{$store.getters.getPriceById(ele.fruitId)}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            fruitName: "mango"
        }
    }
}
</script>

<style scoped>
table {
    text-align: center;
    border: 2px solid blue;
    width: 80%;
}

.listContainer {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
</style>