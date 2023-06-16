<template>
  <div
    id="about"
    class="w-full h-screen bg-[#232323] flex flex-col lg:flex-row items-center justify-center lg:space-x-24"
  >
    <!-- Content -->
    <div
      class="w-[75%] lg:w-[50%] xl:w-[35%] flex flex-col items-center justify-center sm:items-start sm:justify-start space-y-10 text-white text-center sm:text-justify"
    >
      <h1 class="text-[#379683] text-7xl font-bold">About Binaziz</h1>
      <p>
        Bin Aziz Builtz has been in the industry for eight years, providing
        top-quality construction services to clients across various sectors. The
        company has successfully completed multiple high-end projects,
        establishing itself as a reliable and efficient solution provider.
      </p>
      <p>
        With our years of experience, we have developed the expertise and
        resources to handle projects of varying sizes and complexities. We are
        dedicated to meeting our clients' needs, providing exceptional service,
        and delivering projects within the stipulated timeline and budget.
      </p>
      <p class="hidden md:flex">
        In conclusion, Bin Aziz Builtz is committed to providing secure,
        flexible, and innovative solutions to our clients. We value our
        employees and uphold our company's image and integrity in all our
        operations. Choose Bin Aziz Builtz for your next construction project
        and experience our commitment to excellence.
      </p>
      <CommonButton text="Contact Us" />
    </div>
    <!-- Image -->
    <img
      src="https://images.pexels.com/photos/3510993/pexels-photo-3510993.jpeg"
      alt="bulldozer"
      class="w-[25%] hidden lg:flex"
    />
  </div>
</template>

<script setup>
import CommonButton from "@/components/CommonButton.vue";
</script>
