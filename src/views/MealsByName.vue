<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded-border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
        <img
          :src="meal.strMealThumb"
          :alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="p-3">
        <h3 class="text-xl font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          error nam culpa atque numquam nisi, distinctio dicta corporis ratione
          sit!
        </p>
        <div>
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="py-2 px-3 rounded border-2 border-red-500 hover:bg-red-400 hover:text-white"
            >Youtube</a
          >
          <router-link
            to="/"
            class="py-2 px-3 rounded border-2 border-blue-500 hover:bg-blue-400 hover:text-white"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import {useRoute} from 'vue-router'

import store from "../store";
const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
console.log(meals, "dattatatatattattat");
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(()=>{
 keyword.value = route.params.name
 if(keyword.value){
    searchMeals()
 }
})
</script>
