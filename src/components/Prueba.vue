<!-- <template>
  <div>
    <input
      :value="nombre"
      @input="updateNombre($event)"
    />
    <p>Valor en el componente hijo: {{ nombre }}</p>
  </div>
</template>

<script>
export default {
  name: "Prueba",
  props: {
    nombre: {
      type: String
    }
  },
  methods: {
    updateNombre(event) {
      this.$emit('update:nombre', event.target.value);
    }
  }
};
</script> -->



<template>
  <div class="row q-mb-sm">
      <q-input
          :value="name"
          @input="$emit('changeName:name', $event)"
      />
  </div>
</template>

<script>
  export default {
      props: ["name"],
  }
</script>


