<template>
  <div class="
      w-full
      flex flex-col medium:flex-row print:flex-row
      justify-between small:justify-around medium:justify-between print:justify-between print:small:justify-between
      items-center small:items-start medium:items-end print:items-end print:small:items-end
  ">

    <h1 class="order-first">{{ name.toUpperCase() }}</h1>

    <UiPdfButton class="order-3 medium:order-2" />

    <h2 class="order-2 medium:order-3">{{ label.toUpperCase() }}</h2>
  </div>
</template>

<script setup>
const name = getBasics(NAME);
const label = getBasics(LABEL);
</script>
