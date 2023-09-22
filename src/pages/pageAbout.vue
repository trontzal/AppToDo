<template>
  <q-page padding>
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount()">+</button>
    </div>
    <hr>
    <div>
      <p>This counter is {{ storeCounter.oddOrEven }}</p>
    </div>
    <hr>
    <div>
      <h3>Edit number</h3>
      <input type="number" v-model="storeCounter.count">
    </div>
  </q-page>
</template>

<script>
import {useCounterStore} from '../stores/example-store'

export default {
  data (){
    return{
      storeCounter : useCounterStore()
    }
  },
}
</script>
<style>
  .count{
    font-size: 160px;
  }
</style>
