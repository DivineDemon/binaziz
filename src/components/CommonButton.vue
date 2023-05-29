<template>
  <button
    class="bg-[#379683] text-white text-sm font-bold shadow-lg px-5 py-3 rounded-lg"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
