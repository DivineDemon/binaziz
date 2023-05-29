<template>
  <header
    id="banner"
    class="w-full h-screen flex flex-row items-center justify-center"
  >
    <div class="z-40">
      <div
        class="flex flex-col items-start justify-start text-left text-white space-y-7"
      >
        <h1 class="text-7xl font-bold">Bin Aziz Builtz</h1>
        <h3 class="text-3xl">Contractor & Service Provider</h3>
        <p class="w-[45%]">
          Discover the difference of working with a construction company that
          combines experience, innovation, and a passion for excellence. Contact
          us today to discuss your next venture!
        </p>
        <CommonButton text="Our Services" />
      </div>
    </div>
    <div
      id="glass"
      class="overflow-hidden w-full h-full absolute z-0 top-0 left-0 backdrop-blur-sm bg-black/30"
    />
  </header>
</template>

<script setup>
import CommonButton from "@/components/CommonButton.vue";
</script>
