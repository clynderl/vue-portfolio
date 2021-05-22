<template>
  <div class="rounded-lg shadow-lg overflow-hidden bg-white"
       :class="[hoverable ? hoverableClass : '']"
       @click="$emit('viewModal', card)">
    <div v-if="blog">
      <img class="h-48 object-cover w-full"
           :src="require(`@/assets/${card.img.url}`)"
           :alt="card.img.alt">
    </div>
    <div class="p-6">
      <p v-if="card.tags"
         class="text-sm leading-5 font-medium text-indigo-300 mb-3">
        {{ card.tags }}
      </p>
      <img v-if="!blog" :src="require(`@/assets/${card.logo.url}`)" :alt="card.logo.alt" class="inline mr-1 h-auto w-auto"/>
      <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 inline">{{ card.title }}</h3>
      <p class="text-gray-600 text-base leading-6 mt-3">{{ card.description }}</p>
    </div>

  </div>

</template>

<script>

export default {
  props: ['card', 'blog', 'hoverable'],
  data() {
    return {
      hoverableClass: 'transform hover:scale-103 duration-100 cursor-pointer',
    }
  },
}
</script>

<style scoped>

</style>