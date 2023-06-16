<template>
  <a
    :href="to"
    class="bg-[#379683] text-white text-sm font-bold shadow-lg px-5 py-3 rounded-lg"
  >
    {{ text }}
  </a>
</template>

<script setup>
defineProps({
  text: String,
  to: String,
});
</script>
