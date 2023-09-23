<template>
    <q-list bordered separator>
    <q-item
      v-ripple
      clickable
      @click="useTaskStore.updateTask(task)"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'">

      <q-item-section side top>
        <q-checkbox v-model="task.completed" />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{'text-strikethrough' : task.completed}">{{ task.name }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <div class="row">
          <div class="collum justify-center">
            <q-icon
              name="event"
              size="18px"
              class="q-mr-xs" />
          </div>
          <div class="collum">
            <q-item-label caption class="row justify-end">{{ task.dueDate }}</q-item-label>
            <q-item-label caption class="row justify-end">{{ task.dueTime }}</q-item-label>
          </div>
        </div>
      </q-item-section>
        <q-btn
          icon="delete"
          color="negative"
          flat
          round
          dense
          @click.stop="promptToDelete" />
      <q-item-section>

      </q-item-section>
    </q-item>
    </q-list>
</template>
<script>
  import { store } from 'quasar/wrappers'
  import {useTaskStore} from '../../stores/taskStore'
  import { useQuasar } from 'quasar'

  export default{
    setup () {
      const $q = useQuasar()

      function promptToDelete () {
        $q.dialog({
          title: 'Confirm',
          message: 'Would you like really delete?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          useTaskStoreInstance.deleteTask() // Llama a la función deleteTask del store
        })
      }
      return {confirm, promptToDelete}
    },
    props:["task", "id"],
    data(){
      return{
      useTaskStore : useTaskStore()
      }
    }
  }

</script>

