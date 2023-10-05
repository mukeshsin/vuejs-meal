<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Ingredients</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        :to="{ name: 'byIngredients', params: { ingredient: ingredient.idIngredient } }"
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="bg-white rounded shadow p-4 hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
        <p class="text-gray-700 mt-2">{{ ingredient.strDescription }}</p>
        <h4 class="text-lg font-bold">{{ingredient.strType}}</h4>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients =ref([])

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
     console.log(data.meals,'oooo')
    ingredients.value=data.meals
    });
 
});
</script>
