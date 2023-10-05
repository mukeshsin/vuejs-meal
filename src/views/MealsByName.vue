<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded-lg border-2 border-gray-200 w-full p-2"
      placeholder="Search for Meals"
      @input="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue"; 
import YoutubeButton from "../components/YoutubeButton.vue"

import store from "../store";
const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
