<template>

  <a class="dropdown-item" v-bind:href="link"> <i :class="['fa', 'icon', icon]"></i> {{ text }} </a>

</template>

<script>
  export default {
    name: 'modular-admin-dropdown-item',
    replace: true,
    props: {
      link: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>