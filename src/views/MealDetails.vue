<template>
  <div class="max-w-[800px] mx-auto">
    <pre>{{ meal }}</pre>
    <h1 class="text-5xl font-bold mb-5 mt-4">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 mt-2">
    <div>
        <strong class="font-bold">Id:</strong>{{ meal.idMeal }}
      </div>
      <div>
        <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>{{ meal.strArea }}</div>
    </div>
    <div class="mt-2 mb-2">{{meal.strInstructions}}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <YoutubeButton :href="meal.strYoutube" class="mb-8 mt-12"></YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="py-2 px-3 rounded border-2 border-indigo-500 hover:bg-indigo-400 hover:text-white h-16"
          >View Original Source</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue"
const route = useRoute();
const meal = ref("");

onMounted(() => {
  route.params.id;
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
