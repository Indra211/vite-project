<script setup lang="ts">
import { reactive, Ref, ref, watch, watchEffect } from "vue";

const todoLists: Array<string> = reactive([]);
const todoValue: Ref<string> = ref("");
const name = ref("hello");
const handleAddTodo = () => {
  todoLists.push(todoValue.value);
  todoValue.value = "";
};
const handleRemoveTodo = (index: number) => {
  todoLists.slice(index, 1);
};

// watch(todoValue, () => {
//   console.log(todoValue.value);
//   console.log("======print i");
// });
watchEffect(() => {
  console.log("==============", todoValue.value);
});
</script>

<template>
  <div
    class="bg-cyan-200 w-screen h-screen flex flex-wrap items-center justify-center"
  >
    <div class="w-1/2 m-auto h-1/2 bg-sky-200 p-2">
      <div class="flex gap-2 mb-2">
        <input
          class="flex-[0.8] w-full p-2 rounded-md"
          type="text"
          v-model="todoValue"
        />
        <button
          class="flex-[0.2] w-full p-2 rounded-md bg-sky-500 text-white"
          @click="handleAddTodo"
        >
          Add
        </button>
      </div>
      <div v-if="todoLists.length > 0">
        <div class="mb-1" v-for="(todo, index) in todoLists" :key="todo">
          <div
            class="flex justify-between items-center bg-white rounded-md px-2 py-1 gap-1"
          >
            <p>{{ index + 1 }}. {{ todo }}</p>
            <button @click="handleRemoveTodo(index)">
              <v-icon name="md-delete" class="text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <div v-else>No data</div>

      <div>
        <p>{{ name }}</p>
        <button @mouseover="name = 'world'" @mouseout="name = 'hello'">
          change
        </button>
      </div>
    </div>
  </div>
</template>

