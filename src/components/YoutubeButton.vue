<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="py-2 px-3 rounded border-2 border-red-500 hover:bg-red-400 hover:text-white h-16"
    >
    Youtube
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
