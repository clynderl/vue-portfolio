<template>
  <div>
    <app-section :section="section"></app-section>
  </div>
</template>

<script>
import AppSection from "../components/AppSection";

export default {
  components: {
    AppSection,
  },
  data() {
    return {
      section: {
        title: 'Записи',
        id: 2,
        isBlog: true,
        type: 'blog',
        hoverable: true,
        hasModal: false,
        cards: [
          {
            id: 0,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 1,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 2,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 3,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 4,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 5,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae earum explicabo numquam quia rerum! Atque ea quae sapiente sed.',
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
        ]
      },
    }
  },
}
</script>

<style scoped>

</style>