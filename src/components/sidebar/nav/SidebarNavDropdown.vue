<template>

<li :class="{active: isActive, open: show}">
  <a href="#" v-on:click.stop.prevent="toggle">
    <i class="fa" :class="[icon]"></i>
    {{ itemText }}
    <i class="fa arrow"></i>
  </a>
  <ul>
    <slot></slot>
  </ul>
</li>

</template>

<script>
  export default {
    name: 'modular-admin-sidebar-nav-dropdown',
    replace: true,
    data () {
      return {
        show: false,
        isActive: false
      }
    },
    props: {
      active: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      itemText: {
        type: String,
        default: ''
      }
    },
    methods: {
      toggle () {
        this.show = !this.show
      },
      childActive () {
        this.isActive = true
        this.show = true
      }
    },
    created: function () {
      this.isActive = this.active
      this.$on('maVue::sidebar::Item::active', this.childActive)
    }
  }
</script>