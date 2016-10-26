<template>
  <div class="main-wrapper">
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
    }
  }
</script>