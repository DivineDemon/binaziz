<template>
  <nav
    class="w-screen fixed top-0 p-5 flex flex-row items-center justify-between bg-[#877f62]"
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
      <li class="hover:border-b-2 hover:border-black cursor-pointer">Home</li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">About</li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        Services
      </li>
      <li class="hover:border-b-2 hover:border-black cursor-pointer">
        Contact
      </li>
    </ul>
  </nav>
</template>
