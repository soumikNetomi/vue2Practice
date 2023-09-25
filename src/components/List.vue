<template>
    <div class="listContainer">
       <table>
           <thead>
            <th>SN</th>
            <th>Fruit</th>
            <th>Quantity</th>
            <th>Price</th>
        </thead>
        <tbody>
            <td>1</td>
            <td>Apple</td>
            <td>3</td>
            <td>300</td>
        </tbody>
       </table>
    </div>
</template>

<script>
export default {
    name : "List",
    data(){
        return{
            fruitName:"mango"
        }
    }
}
</script>

<style scoped>
table{
    text-align: center;
    border: 2px solid blue;
    width: 80%;
}
.listContainer{
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
</style>