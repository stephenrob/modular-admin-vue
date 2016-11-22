<template>

  <div class="header-block header-block-collapse hidden-lg-up">
    <button class="collapse-btn" id="sidebar-collapse-btn" v-on:click="collapseSidebar">
      <i class="fa fa-bars"></i>
    </button>
  </div>

</template>

<script>
  export default {
    name: 'modular-admin-header-hide-sidebar',
    methods: {
      collapseSidebar () {
        this.$root.emit('maVue::collapseSidebar')
      }
    }
  }
</script>