<template>
  <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-5 py-2">
    <div class="flex-1 flex justify-between items-center">
      <router-link to="/" custom v-slot="{navigate}">
        <a href="#" @click="navigate">
          <img
              class="rounded-full h-16 w-16 inline"
              src="../assets/IMG_0173.jpg" alt="">
          <span class="text-xl font-semibold pl-4">Павел Семенов</span></a></router-link>
      <label for="menu-toggle" class="cursor-pointer lg:hidden block">
        <img src="https://img.icons8.com/android/24/000000/menu.png" alt=""/>
      </label>
    </div>
    <input type="checkbox" class="hidden" id="menu-toggle" v-model="checkbox">
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 gap-4">
          <li>
            <router-link
                to='/projects'
                @click="checkbox = !checkbox"
                class="lg:p-2 py-3 px-0 block rounded-md hover:bg-indigo-100 p-3 font-semibold text-lg duration-200">
              Проекты
            </router-link>
          </li>
          <li>
            <router-link
                to="/about"
                @click="checkbox = !checkbox"
                class="lg:p-2 py-3 px-0 block rounded-md hover:bg-indigo-100 p-3 font-semibold text-lg duration-200">
              Обо мне
            </router-link>
          </li>
          <li>
            <router-link
                to="/blog"
                @click="checkbox = !checkbox"
                class="lg:p-2 py-3 px-0 block rounded-md hover:bg-indigo-100 p-3 font-semibold text-lg duration-200">
              Блог
            </router-link>
          </li>
          <li>
            <a href=""
               class="lg:p-2 py-3 px-0 block rounded-md hover:bg-indigo-100 p-3 font-semibold text-lg duration-200">Резюме</a>
          </li>
          <li><a href="#"
                 class="lg:p-2 py-3 px-0 block rounded-md hover:bg-indigo-100 p-3 font-semibold text-lg duration-200">
            <svg class="inline" width="12" height="12" viewBox="0 0 17 17" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.51417 0C13.1991 0.00779167 17 3.81296 17 8.5C17 13.1913 13.192 17 8.5 17C3.80871 17 0 13.1913 0 8.5C0 3.81296 3.80163 0.00779167 8.48654 0H8.51417ZM11.1307 11.3333H5.86996C6.32258 14.3551 7.45804 16.2917 8.5 16.2917C9.54267 16.2917 10.6781 14.3551 11.1307 11.3333ZM15.7597 11.3333H11.8476C11.5458 13.4477 10.9119 15.1597 10.0874 16.1295C12.6862 15.5911 14.8127 13.7565 15.7597 11.3333ZM5.15312 11.3333H1.24029C2.18804 13.7565 4.31446 15.5911 6.91333 16.1295C6.08883 15.1597 5.45487 13.4477 5.15312 11.3333ZM5.066 6.375H1.003C0.768542 7.20092 0.478125 8.77554 1.003 10.625H5.066C4.93283 9.34008 4.91371 7.84479 5.066 6.375ZM11.2221 6.375H5.77858C5.64046 7.65 5.61921 9.15662 5.77858 10.625H11.2221C11.361 9.34221 11.3808 7.84125 11.2221 6.375ZM15.9977 6.375H11.9347C11.9786 6.79433 12.1529 8.51346 11.9347 10.625H15.9977C16.5226 8.77483 16.2322 7.20021 15.9977 6.375ZM6.91333 0.870542C4.31446 1.40887 2.18804 3.24346 1.24029 5.66667H5.15312C5.45487 3.55229 6.08883 1.83954 6.91333 0.870542ZM11.1307 5.66667C10.6781 2.64492 9.54267 0.708333 8.5 0.708333C7.45804 0.708333 6.32258 2.64492 5.86996 5.66667H11.1307ZM10.0874 0.870542C10.9119 1.83954 11.5458 3.55229 11.8476 5.66667H15.7597C14.8127 3.24346 12.6862 1.40887 10.0874 0.870542Z"
                    fill="black"/>
            </svg>
            Русский
            <svg class="inline" viewBox="0 0 30 30"
                 style="width:10px;fill:rgba(0,0,0,0.6);flex-shrink:0;margin-left:5px;">
              <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
            </svg>
          </a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false
    }
  }
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>