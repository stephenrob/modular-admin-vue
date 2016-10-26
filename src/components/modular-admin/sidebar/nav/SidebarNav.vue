<template>

  <nav class="menu">
    <ul class="nav" id="sidebar-menu">
      <slot></slot>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'modular-admin-sidebar-nav'
  }
</script>