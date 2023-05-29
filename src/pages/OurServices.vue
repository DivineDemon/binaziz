<template>
  <div
    id="services"
    class="p-40 w-full bg-[#232323] flex flex-col items-center justify-center space-y-10"
  >
    <div class="flex flex-col items-center justify-center space-y-5">
      <h1 class="text-7xl font-bold text-white">Services</h1>
    </div>
    <div
      class="grid grid-cols-3 place-items-center justify-content-center gap-10"
    >
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :data="service"
      />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "@/components/ServiceCard.vue";

// Data
const services = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/7245366/pexels-photo-7245366.jpeg",
    title: "Construction Work",
    description:
      "Catering to diverse sectors such as commercial, residential, industrial, and institutional, our construction work is tailored to meet the unique needs and requirements of each client, delivering exceptional service every time.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/15686925/pexels-photo-15686925/free-photo-of-wiener-justizpalast.jpeg",
    title: "Govt. and Semi Govt.",
    description:
      "With a proven track record of successfully delivering government and semi-government projects, we understand the unique requirements and regulations of such projects, ensuring compliance and timely completion while upholding our commitment to excellence.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg",
    title: "Security",
    description:
      "Our construction projects are designed with security in mind, incorporating the latest safety measures and technologies to ensure the safety of our clients' property and personnel, providing peace of mind every step of the way.",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg",
    title: "Material and Industrial Component Supplies",
    description:
      "As a full-service construction company, we also offer high-quality material and industrial component supplies to meet the needs of every project, ensuring that our clients have access to the best materials and equipment in the market.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg",
    title: "Import & Export",
    description:
      "We also offer import/export services for construction-related goods and equipment, providing our clients with seamless and efficient logistics solutions that ensure timely delivery and cost-effectiveness.",
  },
];
</script>
