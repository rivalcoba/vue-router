<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img 
      :src="`/images/${destination.image}`" 
      :alt="destination.name">
      <p>
        {{ destination.description }}
      </p>
    </div>
  </section>
</template>

<script>
// Importando datos
import sourceData from '@/data.json'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    destination() {
      return sourceData.destinations.find(destination => { return destination.id === this.id })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>