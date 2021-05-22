<template>
  <app-about-header>{{ about }}</app-about-header>
  <app-section v-for="section in sections" :section="section" :key="section.id"></app-section>
</template>

<script>
import AppSection from "../components/AppSection";
import AppAboutHeader from "../components/AppAboutHeader"

export default {
  components: {
    AppSection,
    AppAboutHeader,
  },
  data() {
    return {
      about: 'Я начинающий full-stack разработчик, живущий в Москве 🇷🇺',
      sections: [
        {
          title: 'Последние проекты',
          id: 0,
          isBlog: false,
          type: 'lastProjects',
          hoverable: true,
          hasModal: true,
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
        {
          title: 'Контакты',
          id: 1,
          isBlog: false,
          type: 'contacts',
          hoverable: true,
          hasModal: false,
          cards: [
            {
              id: 0,
              title: 'Email',
              description: 'clynderl@yandex.ru',
              logo: {
                url: 'email.png',
                alt: 'Письмо',
              },
            },
            {
              id: 1,
              title: 'GitHub',
              description: 'https://github.com/clynderl',
              logo: {
                url: 'github.png',
                alt: 'GitHub logo',
              },
            },
            {
              id: 2,
              title: 'Telegram',
              description: '@zalqz',
              logo: {
                url: 'telegram.png',
                alt: 'Telegram logo',
              },
            },
          ]
        },
        {
          title: 'Последние записи в блоге',
          id: 2,
          isBlog: true,
          type: 'blog',
          hoverable: true,
          hasModal: true,
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
          ]
        },
        {
          title: 'Языки',
          id: 3,
          isBlog: false,
          type: '',
          hoverable: false,
          hasModal: false,
          cards: [
            {
              id: 0,
              title: 'Английский',
              description: 'Upper-Intermediate',
              logo: {
                url: 'english.png',
                alt: 'Флаг Америки',
              },
            },
            {
              id: 1,
              title: 'Русский',
              description: 'Родной язык',
              logo: {
                url: 'russian.png',
                alt: 'Флаг России',
              },
            },
          ]
        },
        {
          title: 'Образование',
          id: 4,
          isBlog: false,
          type: '',
          hoverable: false,
          hasModal: false,
          cards: [
            {
              id: 0,
              title: 'РАНХиГС',
              description: 'Факультет информационных технологий и анализа данных. Прикладная информатика.',
              logo: {
                url: 'ranepa.png',
                alt: 'Лого РАНХиГС',
              },
            },
            {
              id: 1,
              title: 'МИРЭА',
              description: 'Институт кибернетики · Прикладаная математика и информатика.',
              logo: {
                url: 'mirea.png',
                alt: 'Лого МИРЭА',
              },
            },
          ]
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>