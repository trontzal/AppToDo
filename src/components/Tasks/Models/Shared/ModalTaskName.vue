<template>
  <div class="row q-mb-sm">
    <q-input
    @update:model-value="$emit('update:name', $event)"
      outlined
      :value="name"
      :rules="[val => !!val || 'Field is required']"
      label="Task Name"
      class="col"
      ref="name"
      autofocus >
      <template v-slot:append>
        <q-icon
          name="close"
          @click="name = ''"
          class="cursor-pointer"
          v-if="name" />
      </template>
    </q-input>
    <p>{{ name }}</p>

  </div>
</template>
<script>

export default{
  name: "ModalTaskName",
  props:[
    "name"
  ]
}

</script>
