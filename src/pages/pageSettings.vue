<!-- <template>
  <div>
    <Prueba
      :nombre="nombre"
      @update:nombre="nombre = $event"
    />
    <p>Valor en el componente padre: {{ nombre }}</p>
  </div>
</template>

<script>
import Prueba from "src/components/Prueba.vue";

export default {
  name: "App",
  components: {
    Prueba
  },
  data() {
    return {
      nombre: "f"
    };
  }
};
</script> -->

<template>
  <ModalName
     v-model:name="taskToSubmit.name"
     @changeName:name="(e)=>taskToSubmit.name = e.target.value"
  />
  <pre>{{ taskToSubmit }}</pre>
</template>

<script>
  import ModalName from "src/components/Prueba.vue";

  export default {
      data(){
          return{
              taskToSubmit:{
                  name: '',
                  dueDate: '',
                  dueTime: '',
                  completed: false
              }
          }
      },
      components:{
        ModalName
      }
  }
</script>
