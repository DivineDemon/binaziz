<template>
  <div
    class="bg-[#232323] rounded-lg flex flex-row items-center justify-start sm:space-x-10 text-white w-[250px] md:w-[350px] lg:w-[500px] h-[175px] p-10"
  >
    <font-awesome-icon
      :icon="'fa-solid' + ' ' + data.icon"
      class="w-10 h-10 text-red-400 hidden sm:flex"
    />
    <div class="flex flex-col items-start justify-start">
      <h3 class="mb-5 text-2xl lg:text-4xl font-semibold">{{ data.title }}</h3>
      <p
        v-for="item in data.items"
        :key="item"
        class="text-xs md:text-normal text-red-400 sm:text-white"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>
