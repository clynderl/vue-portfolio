<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>

  <div class="fixed z-10 left-0 sm:left-1/4 sm:right-1/4 overflow-y-auto top-6">
    <div class="mx-2 max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">

      <div class="flex justify-between items-center">
        <span class="font-light text-gray-600">{{ card.tags }}</span>
        <button class="px-2 py-1 hidden sm:flex items-center rounded hover:bg-gray-200 cursor-pointer" @click="$emit('close')">
          Посмотреть на GitHub
        </button>
        <button class="px-2 py-1 flex items-center rounded hover:bg-gray-200 cursor-pointer" @click="$emit('close')">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.50016 7.99919L15.791 0.708313L16.2918 1.2091L9.00095 8.49998L16.2918 15.7909L15.791 16.2916L8.50016 9.00077L1.20929 16.2916L0.708496 15.7909L7.99937 8.49998L0.708496 1.2091L1.20929 0.708313L8.50016 7.99919Z"
                  fill="black"/>
          </svg>
          Закрыть
        </button>
      </div>
      <div class="m-2">
        <img class="object-cover h-48 w-full h-full"
             :src="require(`@/assets/${card.img.url}`)"
             :alt=card.img.alt>
      </div>
      <div class="mt-2">
        <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">
          {{ card.title }}
        </a>
        <p class="mt-2 text-gray-600">{{ card.description }}</p>
      </div>
      <div class="flex justify-between items-center mt-4">
        <button class="px-2 py-1   flex items-center rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                @click="$emit('close')">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.2292 11.73C10.0371 12.8045 8.45892 13.4583 6.72917 13.4583C3.01537 13.4583 0 10.443 0 6.72917C0 3.01537 3.01537 0 6.72917 0C10.443 0 13.4583 3.01537 13.4583 6.72917C13.4583 8.45892 12.8045 10.0371 11.73 11.2292L17 16.4992L16.4992 17L11.2292 11.73ZM6.72917 0.708333C10.052 0.708333 12.75 3.40637 12.75 6.72917C12.75 10.052 10.052 12.75 6.72917 12.75C3.40637 12.75 0.708333 10.052 0.708333 6.72917C0.708333 3.40637 3.40637 0.708333 6.72917 0.708333ZM3.54167 6.375H6.375V3.54167H7.08333V6.375H9.91667V7.08333H7.08333V9.91667H6.375V7.08333H3.54167V6.375Z"
                  fill="#37352F" fill-opacity="0.6"/>
          </svg>
          Открыть страницу
        </button>
        <div>
          <button class="px-2 py-1  flex items-center rounded hover:bg-gray-200 cursor-pointer"
                  @click="$router.push('/projects')">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.2292 11.73C10.0371 12.8045 8.45892 13.4583 6.72917 13.4583C3.01537 13.4583 0 10.443 0 6.72917C0 3.01537 3.01537 0 6.72917 0C10.443 0 13.4583 3.01537 13.4583 6.72917C13.4583 8.45892 12.8045 10.0371 11.73 11.2292L17 16.4992L16.4992 17L11.2292 11.73ZM6.72917 0.708333C10.052 0.708333 12.75 3.40637 12.75 6.72917C12.75 10.052 10.052 12.75 6.72917 12.75C3.40637 12.75 0.708333 10.052 0.708333 6.72917C0.708333 3.40637 3.40637 0.708333 6.72917 0.708333ZM3.54167 6.375H6.375V3.54167H7.08333V6.375H9.91667V7.08333H7.08333V9.91667H6.375V7.08333H3.54167V6.375Z"
                    fill="#37352F" fill-opacity="0.6"/>
            </svg>
            Все проекты
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['close'],
  props: ['card'],
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
}
</style>