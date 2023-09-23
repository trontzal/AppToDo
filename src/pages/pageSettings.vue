<template>
  <q-page padding>
    <q-btn
      icon="delete"
      color="negative"
      flat
      round
      dense
      @click="confirm"
      />
      <p>{{taskStore.tasks}}</p>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useTaskStore } from '../stores/taskStore'

const $q = useQuasar()
const taskStore = useTaskStore()

function confirm() {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    taskStore.deleteTask()
  })
}

</script>
