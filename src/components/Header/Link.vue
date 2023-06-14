<template>
  <div class="link">
    <Icon :name="icon" />
    <a v-if="url" :href="url" rel="noopener noreferrer" target="_blank">{{ display }}</a>
    <p v-if="!url">{{ display }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  url: String | null,
  display: String
});
</script>