<template>
  <nav
    class="w-screen fixed top-0 z-50 p-3 md:py-5 md:px-10 flex flex-row items-center justify-between bg-[#877f62]"
  >
    <!-- Logo -->
    <div class="flex flex-row items-center justify-center space-x-2">
      <!-- <font-awesome-icon icon="fa-solid fa-city" class="w-8 h-8" /> -->
      <img src="@/assets/images/logo.png" alt="logo" class="w-7 h-7" />
      <span class="hidden md:flex font-bold text-lg leading-5 cursor-pointer">
        Bin Aziz Builtz
      </span>
    </div>
    <!-- Items -->
    <ul class="hidden md:flex flex-row items-center justify-center space-x-10">
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        <a href="#banner">Home</a>
      </li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        <a href="#about">About</a>
      </li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        <a href="#services">Services</a>
      </li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        <a href="#contact">Contact Us</a>
      </li>
    </ul>

    <!-- Responsive -->
    <button
      class="flex items-center justify-center md:hidden bg-transparent rounded-lg w-7 h-7"
      @click="toggleDropdown"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>

    <div
      class="absolute right-[10px] top-14 bg-[#877f62] rounded-lg shadow-lg p-5"
      :class="activeDropdown ? 'flex' : 'hidden'"
    >
      <ul class="flex-col items-start justify-start space-y-5">
        <li class="hover:border-b-2 hover:border-black cursor-pointer">
          <a href="#banner">Home</a>
        </li>
        <li class="hover:border-b-2 hover:border-black cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li class="hover:border-b-2 hover:border-black cursor-pointer">
          <a href="#services">Services</a>
        </li>
        <li class="hover:border-b-2 hover:border-black cursor-pointer">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Data
const activeDropdown = ref(false);

// Methods
const toggleDropdown = () => {
  activeDropdown.value = !activeDropdown.value;
};
</script>
