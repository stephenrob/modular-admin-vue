<template>

  <div class="sidebar-header">
    <div class="brand">
      {{ appName }}
    </div>
  </div>

</template>

<script>
  export default {
    name: 'modular-admin-sidebar-header',
    props: {
      appName: {
        type: String,
        default: ''
      }
    }
  }
</script>