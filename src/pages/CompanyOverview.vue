<template>
  <div
    class="pb-40 w-full bg-[#232323] flex flex-col items-center justify-center space-y-10"
  >
    <h1 class="text-7xl text-white font-bold">Company Overview</h1>
    <!-- Tab Actions -->
    <div class="flex flex-row items-center justify-center space-x-10">
      <button
        class="px-5 py-3 border border-[#379683] rounded-lg text-white hover:bg-[#379683]"
        :class="activeTab === 1 && 'bg-[#379683]'"
        @click="setActiveTab(1)"
      >
        Values
      </button>
      <button
        class="px-5 py-3 border border-[#379683] rounded-lg text-white hover:bg-[#379683]"
        :class="activeTab === 2 && 'bg-[#379683]'"
        @click="setActiveTab(2)"
      >
        Objectives
      </button>
    </div>
    <!-- Tab View -->
    <div
      class="flex flex-col items-center justify-center"
      v-if="activeTab === 1"
    >
      <div
        v-for="value in values"
        :key="value.id"
        class="w-[50%] flex flex-col items-start justify-start space-y-5 mt-5 text-justify text-white"
      >
        <h3 class="text-3xl text-[#379683] font-semibold">{{ value.title }}</h3>
        <p>{{ value.description }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center" v-else>
      <div
        v-for="objective in objectives"
        :key="objective.id"
        class="w-[50%] flex flex-col items-start justify-start space-y-5 mt-5 text-justify text-white"
      >
        <h3 class="text-3xl text-[#379683] font-semibold">
          {{ objective.title }}
        </h3>
        <p>{{ objective.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Data
const activeTab = ref(1);
const values = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, operating with honesty, transparency, and fairness in all our interactions. Trust is the foundation of our relationships, and we strive to earn and maintain it through our actions.",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We are committed to delivering nothing but the best. Our pursuit of excellence drives us to continuously improve our skills, embrace innovation, and exceed client expectations. We take pride in our craftsmanship, attention to detail, and the quality of our work.",
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork. We foster a culture of collaboration, encouraging open communication, mutual respect, and the sharing of ideas. By working together, we leverage our collective expertise to overcome challenges and achieve remarkable results.",
  },
  {
    id: 4,
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We listen attentively to their needs, preferences, and aspirations, tailoring our solutions to ensure their complete satisfaction. We are dedicated to building long-lasting relationships based on trust, reliability, and delivering exceptional value.",
  },
];
const objectives = [
  {
    id: 1,
    title: "Client Satisfaction",
    description:
      "Our primary objective is to consistently exceed client expectations. We aim to understand their unique requirements and deliver projects that not only meet their needs but also provide them with a positive and enjoyable construction experience.",
  },
  {
    id: 2,
    title: "Quality and Craftsmanship",
    description:
      "We strive for excellence in every project we undertake. Our objective is to deliver superior quality and craftsmanship that stands the test of time. We are committed to using the finest materials, implementing best practices, and employing skilled professionals to ensure outstanding results.",
  },
  {
    id: 3,
    title: "Timely Delivery",
    description:
      "We recognize the importance of completing projects on time. Our objective is to meticulously plan and manage each project, adhering to schedules and deadlines without compromising on quality. We understand that time is of the essence, and we are dedicated to delivering projects within agreed-upon timeframes.",
  },
  {
    id: 4,
    title: "Safety and Sustainability",
    description:
      "The well-being of our employees, clients, and the environment is of utmost importance to us. Our objective is to maintain a safe and healthy work environment, adhering to stringent safety standards and implementing sustainable construction practices. We strive to minimize our environmental impact and promote sustainability throughout our operations.",
  },
  {
    id: 5,
    title: "Continuous Improvement",
    description:
      "We believe in the power of learning and growth. Our objective is to continuously enhance our skills, adopt new technologies, and stay at the forefront of industry advancements. We encourage innovation, creativity, and a culture of continuous improvement to deliver better outcomes with each project.",
  },
];

// Methods
const setActiveTab = (value) => {
  activeTab.value = value;
};
</script>
