<template>
  <div class="flex flex-col items-start justify-start w-[25%]">
    <img :src="data.image" alt="banner" class="rounded-t-lg object-contain" />
    <div
      class="w-full p-10 flex flex-col items-start space-y-5 bg-[#232323] rounded-b-lg h-[350px]"
    >
      <h3 class="text-[#379683] text-2xl font-bold">{{ data.title }}</h3>
      <p class="text-white text-justify">{{ data.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>
