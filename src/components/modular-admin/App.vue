<template>
  <div class="main-wrapper" v-on:click="closeDropdowns">
    <div class="app" :class="{'sidebar-fixed': fixedSidebar, 'footer-fixed': fixedFooter}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modular-admin-app',
    props: {
      fixedSidebar: {
        type: Boolean,
        default: false
      },
      fixedFooter: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDropdowns () {
        this.$root.$emit('hide::notificationsdropdown')
        this.$root.$emit('hide::profiledropdown')
      }
    }
  }
</script>