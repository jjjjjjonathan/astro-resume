<template>
  <div
    class="flex flex-wrap flex-row small:flex-col medium:flex-row print:small:flex-row justify-center small:justify-between print:justify-between medium:justify-around gap-x-4 small:gap-0 text-sm items-end medium:items-center print:items-center px-2">
    <HeaderLink :icon="emailIcon" :url="emailUrl" :display="emailDisplay" />

    <HeaderLink v-if="phone" :icon="phone.icon" :display="phone.phone" />

    <HeaderLink :icon="urlIcon" :url="url" :display="urlDisplay" />

    <HeaderLink :icon="locationIcon" :display="location" />

    <HeaderLink v-for="{ profileUsername, profileUrl, profileIcon } in profiles" :icon="profileIcon"
      :display="profileUsername" :url="profileUrl" />
  </div>
</template>

<script setup>
const { emailDisplay, emailUrl, emailIcon } = getBasics(EMAIL);
const { url, urlDisplay, urlIcon } = getBasics(URL);
const { location, locationIcon } = getBasics(LOCATION);
const profiles = getBasics(PROFILES);
const phone = getBasics(PHONE);
</script>
