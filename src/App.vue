<template>
<the-navigation></the-navigation>
<div class="container">
  <router-view></router-view>
</div>
</template>
<script>
// Importando el componente de navegación
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {
    TheNavigation
  }
}
</script>
