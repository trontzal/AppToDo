<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <!-- <task
        v-for="(task, key) in useTaskStore.tasks"
        :key="key"
        :task="task"
        :id="key">
    </task> -->
    <task>

    </task>
    </q-list>
  </q-page>
</template>

<script>
import {useTaskStore} from '../stores/taskStore'
import {task} from '../components/Tasks/Task.vue'

export default {
  data(){
    return{
      useTaskStore : useTaskStore(),
      task
    }
  }
}
</script>
<style>

</style>
