<template>
  <div
    class="p-5 md:p-10 lg:p-20 xl:p-40 w-full bg-[#353535] flex flex-col items-center justify-center space-y-10"
  >
    <div class="flex flex-col items-center justify-center space-y-5">
      <h1 class="text-4xl md:text-7xl font-bold text-white">Our Clients</h1>
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 place-items-center justify-content-center gap-10"
    >
      <ClientCard v-for="client in clients" :key="client.id" :data="client" />
    </div>
  </div>
</template>

<script setup>
import ClientCard from "@/components/ServiceCard.vue";

// Data
const clients = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/KUlnuPmu49A/maxresdefault.jpg",
    title: "DHA Multan",
    description:
      "6, 9 and 12 Marla Villa Construction. Partnership with Gul Construction & Co.",
  },
  {
    id: 2,
    image:
      "https://progressive.international/static/943460774633fed87f39e89ee477877d/pi.jpg",
    title: "Progressive International",
    description:
      "Renovation Projects of DHQ and THQ Hospitals as a Sub Contract.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg",
    title: "Gul Construction & Co.",
    description: "Partnership on Housing Projects in Islamabad.",
  },
];
</script>
