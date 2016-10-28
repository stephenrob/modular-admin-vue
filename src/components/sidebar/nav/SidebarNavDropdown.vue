<template>

<li :class="{active: isActive, open: show}">
  <a href="#" v-on:click.stop.prevent="toggle(e)">
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
      toggle (e) {
        this.show = !this.show
      }
    },
    created: function () {
      this.isActive = this.active
      this.$on('sidebaritem::active', () => {
        this.isActive = true
        this.show = true
      })
    }
  }
</script>