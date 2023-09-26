<template>
    <div class="userContainer">
        <h2>* ADD FRUITS *</h2>
        <select name="fruits" id="fruits" v-model="fruitId">
            <option v-for="(ele, index) in this.$store.state.fruits" :key=index :value=index>
                {{ ele }}
            </option>
        </select><br>
        <input type="number" placeholder="Enter Quantity" v-model="quantity"><br>
        <button @click="submit()" class="submit">Submit</button>
        <Total />
    </div>
</template>

<script>
import Total from './Total.vue';
export default {
    name: "User",
    data() {
        return {
            fruitId: 0,
            quantity: 0,
        }
    },
    methods: {
        submit() {
            const payload = { fruitId: this.fruitId, quantity: this.quantity }
            this.$store.dispatch("addList", payload)
        }
    },
    components: {
        Total
    }
}
</script>

<style scoped>
input,
select {
    margin-bottom: 20px;
    padding: 5px 10px;
    font-size: 14px;
}

select:focus,
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