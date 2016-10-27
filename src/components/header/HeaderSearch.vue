<template>

  <div class="header-block header-block-search hidden-sm-down">
    <form role="search">
      <div class="input-container">
        <i :class="['fa', icon]"></i>
        <input type="search" v-bind:placeholder="placeholderText">
        <div class="underline"></div>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    name: 'modular-admin-header-search',
    props: {
      icon: {
        type: String,
        default: 'fa-search'
      },
      placeholderText: {
        type: String,
        default: 'Search'
      }
    }
  }
</script>