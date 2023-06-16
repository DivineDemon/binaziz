<template>
  <div
    class="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full lg:w-[500px]"
  >
    <img
      :src="data.image"
      alt="banner"
      class="rounded-t-lg h-[250px] w-[95%] lg:w-[500px] object-cover"
    />
    <div
      class="w-[95%] lg:w-full p-10 flex flex-col items-center sm:items-start space-y-5 bg-[#232323] text-white rounded-b-lg h-[300px]"
    >
      <h3 class="text-[#379683] text-lg sm:text-2xl font-bold">
        {{ data.title }}
      </h3>
      <p
        class="text-white text-center sm:text-justify overflow-hidden after:text-ellipsis text-xs sm:text-normal"
      >
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>
