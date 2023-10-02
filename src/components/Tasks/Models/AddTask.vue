<template>
  <q-card>
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>

        <q-space/>

        <q-btn
          v-close-popup
          flat
          round
          dense
          icon="close"
           />

      </q-card-section>

      <form @submit="submitForm()">
        <q-card-section class="q-pt-none">
          <div class="row q-mb-sm">
            <q-input
              outlined
              v-model="taskToSubmit.name"
              :rules="[val => !!val || 'Field is required']"
              label="Task Name"
              class="col"
              ref="name"
              autofocus >
              <template v-slot:append>
               <q-icon
                  name="close"
                  @click="taskToSubmit.name = ''"
                  class="cursor-pointer"
                  v-if="taskToSubmit.name" />
              </template>
            </q-input>


          </div>
          <div class="row q-mb-sm">
            <q-input
              outlined
              label="Due Date"
              v-model="taskToSubmit.dueDate">

            <template v-slot:append>
              <q-icon
                name="close"
                @click="clearDueDate"
                class="cursor-pointer"
                v-if="taskToSubmit.dueDate" />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          </div>

          <div
            class="row q-mb-sm"
            v-if="taskToSubmit.dueDate">
            <q-input
              outlined
              label="Due Time"
              v-model="taskToSubmit.dueTime"
              class="col">

              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="taskToSubmit.dueTime = ''"
                  class="cursor-pointer"
                  v-if="taskToSubmit.dueTime" />
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="taskToSubmit.dueTime">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-card-section>



      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit" />
      </q-card-actions>
    </form>
    </q-card>
</template>
<script>
  import { useTaskStore } from 'src/stores/taskStore'

  export default {
    data() {
      return {
        taskStore: useTaskStore(), // Crear una instancia de la tienda
        taskToSubmit: {
          name: "",
          dueDate: "",
          dueTime: "",
          completed: false
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.name.validate();
        if (!this.$refs.name.hasError) {
          this.submitTask();
        }
      },
      submitTask() {
        this.taskStore.addTask(this.taskToSubmit);
        this.$emit('close')
      },
      clearDueDate(){
        this.taskToSubmit.dueDate = ''
        this.taskToSubmit.dueTime = ''

      }
    }
  }
</script>
