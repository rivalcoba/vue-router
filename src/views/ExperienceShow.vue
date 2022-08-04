<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>
<script>;
import sourceData from '@/data.json'
export default {
  props: {
    // Acepta el Id del destino
    id: { type: Number, required: true },
    // Acepta el Id del slug de la experiencia
    experienceSlug: { type: String, required: true }
  },
  computed: {
    // Permite calcular el destino a partir del id
    destination(){
      return sourceData.destinations.find(
        destination => destination.id === this.id
      )
    },
    // Permite calcular las experiencias a partir del slug del destino
    experience(){
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      )
    }
  }
}
</script>