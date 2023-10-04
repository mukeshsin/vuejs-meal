<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center px-1 hover:bg-blue-200"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-1 h-full hover:bg-blue-200"
        >
          Search Meals
        </router-link>

        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-1 h-full hover:bg-blue-200"
        >
          Meals By Letter
        </router-link>

        <router-link
          :to="{ name: 'byIngredients' }"
          class="inline-flex items-center px-1 h-full hover:bg-blue-200"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>