<template>
  <div
    class="py-40 w-full bg-[#353535] flex flex-col items-center justify-center space-y-10"
  >
    <h1 class="text-white text-7xl font-bold">Contact Us</h1>
    <div
      class="grid grid-cols-2 place-items-center justify-content-center gap-10"
    >
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :data="contact"
      />
    </div>
  </div>
</template>

<script setup>
import ContactCard from "@/components/ContactCard.vue";

// Data
const contacts = [
  {
    id: 1,
    title: "Phone",
    icon: "fa-phone",
    items: ["+92 321 88 88 674", "+92 322 22 20 475"],
  },
  {
    id: 2,
    title: "Email",
    icon: "fa-envelope",
    items: ["baziz@outlook.com"],
  },
  {
    id: 3,
    title: "Address",
    icon: "fa-earth-americas",
    items: [
      "SJ Dairy Market First Floor Asharfabad Near LDA Avenue 1. Raiwend Road Lahore",
    ],
  },
  {
    id: 4,
    title: "Working Hours",
    icon: "fa-list",
    items: ["9:00 - 18:00"],
  },
];
</script>
