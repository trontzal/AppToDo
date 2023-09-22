import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count : 0
  }),
  actions:{
    increaseCount(){
      return this.count ++
    },
    decreaseCount(){
      return this.count --
    }
  },
  getters:{
    oddOrEven: (state) => {
      if(state.count % 2 == 0)
        return "even"
      else
        return "odd"
    }
  }
});
