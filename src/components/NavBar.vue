<template>
  <nav
    class="w-screen fixed top-0 z-50 py-5 px-10 flex flex-row items-center justify-between bg-[#877f62]"
  >
    <!-- Logo -->
    <div class="flex flex-row items-center justify-center space-x-5">
      <font-awesome-icon icon="fa-solid fa-city" class="w-8 h-8" />
      <span class="font-bold text-lg leading-5 cursor-pointer">
        Bin Aziz Builtz
      </span>
    </div>
    <!-- Items -->
    <ul class="flex flex-row items-center justify-center space-x-10">
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
  </nav>
</template>
