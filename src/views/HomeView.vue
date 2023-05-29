<template>
  <div id="home">
    <HeroBanner />
    <AboutUs />
    <CompanyOverview />
    <MissionPage />
    <OurServices />
    <OurClients />
    <ContactUs />
    <OfficeLocation />
    <FooterBar />
  </div>
</template>

<script setup>
import AboutUs from "@/pages/AboutUs.vue";
import CompanyOverview from "@/pages/CompanyOverview.vue";
import HeroBanner from "@/pages/HeroBanner.vue";
import MissionPage from "@/pages/MissionPage.vue";
import OurServices from "@/pages/OurServices.vue";
import OurClients from "@/pages/OurClients.vue";
import ContactUs from "@/pages/ContactUs.vue";
import OfficeLocation from "@/pages/OfficeLocation.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>
