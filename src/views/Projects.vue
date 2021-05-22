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
        title: 'Мои проекты',
        id: 0,
        isBlog: false,
        type: 'Projects',
        hoverable: true,
        hasModal: false,
        cards: [
          {
            id: 0,
            title: 'Переводчик',
            description: 'Расширение для Google Chrome, позволяющее переводить слова и предложения с английского на русский',
            logo: {
              url: 'translate.png',
              alt: 'Знак переводчика',
            },
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 1,
            title: 'Веб-мессенджер',
            description: 'Упрощенный аналог WhatsApp',
            logo: {
              url: 'messanger.png',
              alt: 'Знак мессенджера',
            },
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 2,
            title: 'Распорядок дня',
            description: 'Бот для Telgram',
            logo: {
              url: 'calendar.png',
              alt: 'Знак переводчика',
            },
            img: {
              url: 'blog1.jpg',
              alt: 'blog photo',
            },
            tags: 'Node.js, Vue3, Express',
          },
          {
            id: 3,
            title: 'Tweeter - Twitter Clone',
            description: 'Клон твиттера',
            logo: {
              url: 'dashboard.png',
              alt: 'Знак переводчика',
            },
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