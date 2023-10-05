<template>
  <div :key="meal.idMeal" class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="text-xl font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error
        nam culpa atque numquam nisi, distinctio dicta corporis ratione sit!
      </p>
      <div class="flex items-center space-x-4">
        <!-- YoutubeButton Component -->
        <YoutubeButton
          :href="href"
          class="text-red-500 hover:text-red-600"
        />

        <!-- Router Link -->
        <router-link
          to="/"
          class="py-2 px-3 rounded border-2 border-blue-500 hover:bg-blue-400 hover:text-white"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue"
const { meal } = defineProps({
  meal: Object,
  href:String,
});
</script>
