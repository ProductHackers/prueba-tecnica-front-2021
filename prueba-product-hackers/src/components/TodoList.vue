<template>
  <section>
    <div class="main">
      <div class="todo-insert">
        <h1>TO DO</h1>
        <form @submit.prevent="addTodo()">
          <label>Insertar Todo</label>
          <input v-model="todoName" name="newTodo" placeholder="Add new TO DO"/>
          <button>Add ToDo</button>
        </form>
      </div>
      <div class="todo-list">
        <ul v-if="this.$store.getters.todos">
          <li class="element-wrapper"
          v-for="item in this.$store.getters.todos" :key="item.index">
          <h2>{{ item.todoName }}</h2>
          <div class="fav-icon" @click="setFavMethod(item)">
            <i v-if="item.isFav" class="full-fav"/>
            <i v-else class="empty-fav"/>
          </div>
          <i class="delete-icon" @click="deleteItemMethod(item)"/>
          <h4>Completed</h4><input type="checkbox" class="checkbox" @change="setCompletedMethod(item)">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: {},
    data: function () {
    return {
      todoName:'',
    };
  },
  mounted() {

    this.$store.dispatch('loadTodos', JSON.parse(localStorage.getItem('localTodos') || "[]"))
  },
  methods: {
    addTodo() {
      if(this.todoName !== '') {
        let date = new Date()
        const todo = {
          id: date.getTime(),
          todoName: this.todoName,
          isFav: false,
          isCompleted: false
        }
        this.$store.dispatch('loadTodos', [todo])
      }
    },
    setFavMethod(item) {
      this.$store.dispatch('setFavAction', item)
    },
    deleteItemMethod(item) {
      this.$store.dispatch('deleteItemAction', item)
    },
    setCompletedMethod(item) {
      this.$store.dispatch('setCompletedAction', item)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.full-fav {
  content: url('../assets/full-fav.png');
}
.empty-fav {
  content: url('../assets/border-fav.png');
}
.delete-icon {
  content: url('../assets/delete.png');
}
</style>
