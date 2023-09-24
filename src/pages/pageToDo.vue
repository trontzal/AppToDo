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
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        dense
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask></AddTask>
    </q-dialog>
  </q-page>
</template>

<script>
import {useTaskStore} from '../stores/taskStore'
import Task from 'components/Tasks/Task.vue'
import AddTask from 'components/Tasks/Models/AddTask.vue'

export default {
  name: 'ToDo',
  components:{
    Task,
    AddTask
  },
  data(){
    return{
      useTaskStore : useTaskStore(),
      showAddTask : true,
    }
  }
}
</script>
<style>

</style>
