<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <Task
        v-for="(task, key) in useTaskStore.tasks"
        :key="key"
        :task="task"
        :id="key">
    </Task>
    </q-list>
  </q-page>
</template>

<script>
import {useTaskStore} from '../stores/taskStore'
import Task from 'components/Tasks/Task.vue'

export default {
  name: 'ToDo',
  components:{
    Task
  },
  data(){
    return{
      useTaskStore : useTaskStore()
    }
  }
}
</script>
<style>

</style>
