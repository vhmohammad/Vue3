<template>
  <div class="todo-container">
    <h1> Todo List </h1>
    <h3>لیست کارها</h3>

    <h1> {{ newTask }} </h1>


    <input v-model="newTask" class="text" placeholder=" تسک جدید را وارد کنید " @keyup.enter="addTask" />
    <button @click="addTask" class="marjin btn btn-secondary">افزودن</button>


    <h2>تسک‌های انجام نشده</h2>
    <table v-if="unfinishedTasks.length">
      <tr v-for="(task, index) in unfinishedTasks" :key="index">
        <td><input class="pointer" type="checkbox" v-model="task.done" @change="saveTasks"/></td>
        <td>{{ task.text }}</td>
        <td>
          <button class="btn btn-outline-danger" @click="deleteTask(task)">🗑️</button>
        </td>
      </tr>
    </table>
    <p v-else> 🎉 ! همه کارها انجام شده‌اند </p>


    <h2>تسک‌های انجام شده</h2>
    <table v-if="finishedTasks.length">
      <tr v-for="(task, index) in finishedTasks" :key="index">
        <td><input class="pointer" type="checkbox" v-model="task.done" @change="saveTasks"/></td>
        <td><s>{{ task.text }}</s></td>
        <td>
          <button class="btn btn-outline-danger" @click="deleteTask(task)">🗑️</button>
        </td>
      </tr>
    </table>
    <p v-else> فعلاً کاری انجام نشده </p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTask: '',
      tasks: [],
      gge: null,
    }
  },
  computed: {
    unfinishedTasks() {
      return this.tasks.filter(task => !task.done)
    },
    finishedTasks() {
      return this.tasks.filter(task => task.done)
    }
  },
  methods: {
    addTask() {
      const text = this.newTask.trim()
      if (text) {
        this.tasks.push({text, done: false})
        this.newTask = ''
        this.saveTasks()
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      if (index !== -1) {
        this.tasks.splice(index, 1)
        this.saveTasks()
      }
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const saved = localStorage.getItem('tasks')
      if (saved) {
        this.tasks = JSON.parse(saved)
        this.gge = this.tasks
      }
    }
  },
  mounted() {
    this.loadTasks()
  }
}
</script>

<style scoped>
.marjin{

  margin-left: 6px;

}

.text{

  text-align: right;
  border-radius: 7px;

}

.pointer{

  cursor: pointer;

}

.todo-container {
  max-width: 600px;
  margin: auto;
  font-family:"2  Nazanin";
  padding: 20px;
  text-align: center;
  background: beige;
  border-radius: 10px;
}

input[type="text"] {
  width: 70%;
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

table {
  width: 100%;
  margin-bottom: 20px;
}

td {
  padding: 5px;
}

s {
  color: gray;
}
</style>
