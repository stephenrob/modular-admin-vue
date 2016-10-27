<template>
  <li :class="{active: active}">
    <a v-bind:href="link" v-html="linkContent">
    </a>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'modular-admin-sidebar-nav-item',
    replace: true,
    computed: {
      linkContent () {
        return '<i class="fa ' + this.icon + '"></i> ' + this.itemText
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
      link: {
        type: String,
        default: '#'
      },
      itemText: {
        type: String,
        default: ''
      }
    },
    created: function () {
      if (this.active) {
        this.$parent.$emit('sidebaritem::active')
      }
    }
  }
</script>