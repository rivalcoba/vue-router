<template>
<div>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <go-back></go-back>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>
        {{ destination.description }}
      </p>
    </div>
  </section>
  <section class="experiences">
    <h2>Mejores Experiencias en {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <experience-card :experience="experience" />
      </router-link>
    </div>
    <router-view></router-view>
  </section>
</div>
</template>

<script>
// Importando datos
import sourceData from "@/data.json";
// Importando componente
import ExperienceCard from "@/components/ExperienceCard.vue";
// Importando el componente GoBack
import GoBack from "@/components/GoBack.vue";

export default {
  components: {
    ExperienceCard,
    GoBack,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
    },
    experienceSlug: { type: String },
  },
  computed: {
    destination() {
      return sourceData.destinations.find((destination) => {
        return destination.id === this.id;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
