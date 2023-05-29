<template>
  <div
    class="p-5 md:p-10 lg:p-20 xl:p-40 w-full bg-[#353535] flex flex-col items-center justify-center space-y-10"
  >
    <div class="flex flex-col items-center justify-center space-y-5">
      <h1 class="text-4xl md:text-7xl font-bold text-red-400">Our Mission</h1>
      <p
        class="text-center text-lg font-semibold text-white w-full hidden lg:flex xl:w-[50%]"
      >
        By embracing these values and objectives, our construction company aims
        to be a trusted partner, delivering exceptional construction solutions
        that leave a lasting positive impact on our clients, communities, and
        the industry as a whole.
      </p>
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 place-items-center justify-content-center gap-3 lg:gap-10"
    >
      <MissionCard
        v-for="mission in missions"
        :key="mission.id"
        :data="mission"
      />
    </div>
  </div>
</template>

<script setup>
import MissionCard from "@/components/MissionCard.vue";

// Data
const missions = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    title: "Secure and Flexible",
    description:
      "Our Mission is to create a secure and controlled environment for every one of our customers through flexible company solutions and to become a best in - class company solution providers through long term customer relationship and innovative ideas",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg",
    title: "Talent First",
    description:
      "We will strive to be a preferred employer by placing value on our people. Our clients will have an affinity for our services because of our company's integrity, images, tidy and operations.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg",
    title: "Compliance First",
    description:
      "We will always conduct our operations in accordance with our country legislative requirements in order to protect ,not only the images of our company but to preserve our delicate environment for future generations our business philosophy is to make only the promises that you can keep.",
  },
];
</script>
