<template>
  <q-page padding>
    <div>
      <button @click="funcionDePrueba">
        Usando store desde script
      </button>
    </div>
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
import { useCounterStore } from '../stores/example-store'

export default {
  data() {
    return {
      storeCounter: useCounterStore()
    }
  },
  methods: {
    funcionDePrueba() {
      console.log("se ejecuta")
      this.storeCounter.increaseCount();
    }
  }
}
</script>

<style>
  .count {
    font-size: 160px;
  }
</style>
<style>
  .count{
    font-size: 160px;
  }
</style>
