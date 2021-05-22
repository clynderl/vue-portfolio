<template>
  <section class="lg:px-16 mt-12 mb-12">
    <h2 class="text-2xl font-bold mb-8">{{ section.title }}</h2>
    <div class=" grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <app-card
          v-for="card in allCards"
          :hoverable="section.hoverable"
          :key="card.id" :card="card"
          :blog="section.isBlog"
          @view-modal="viewModal"></app-card>
    </div>
  </section>
  <teleport to="body">
    <app-modal
        v-if="modal && section.hoverable && section.hasModal"
        @close="modal = false"
        :card="card"
    ></app-modal>
  </teleport>
</template>

<script>
import AppCard from "./AppCard";
import AppModal from "./AppModal";

export default {
  props: ['section'],
  components: {
    AppCard,
    AppModal,
  },
  data() {
    return {
      modal: false,
      card: null,
    }
  },
  methods: {
    viewModal(card) {
      this.card = card
      this.modal = true;
    }
  },
  computed: {
    allCards() {
      if (this.section.type === 'lastProjects') {
        const seeOthersCard = {
          id: this.section.cards.length,
          title: 'Посмотреть все проекты',
          description: 'Нажмите сюда, чтобы посмотреть все проекты',
          logo: {
            url: 'others.png',
            alt: 'Знак переводчика',
          },
          img: {
            url: 'blog1.jpg',
            alt: 'blog photo',
          },
          tags: '',
        }
        const cards = this.section.cards
        cards.push(seeOthersCard)
        return cards
      }
      return this.section.cards
    }
  }
}
</script>

<style scoped>

</style>