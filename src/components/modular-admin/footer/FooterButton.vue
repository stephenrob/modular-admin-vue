<template>

  <a v-bind:href="link"><i :class="['fa', 'fa-lg', icon]"></i></a>

</template>

<script>
  export default {
    name: 'modular-admin-footer-button',
    props: {
      link: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>