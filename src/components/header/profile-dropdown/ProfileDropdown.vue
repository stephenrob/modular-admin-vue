<template>

  <li :class="{dropdown: dropdown, open: show}" class="profile">
    <a
      href="#"
      :class="['nav-link',dropdownToggle]"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      :aria-expanded="[show]"
      v-on:click.stop.prevent="toggle()"
    >
      <div class="img" v-bind:style="{ backgroundImage: 'url(' + profilePictureURL + ')' }" v-if="profilePictureURL"> </div>
      <span class="name" v-html="name"></span>
    </a>

    <div class="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1">
      <slot></slot>
    </div>
  </li>

</template>

<script>
  export default {
    name: 'modular-admin-profile-dropdown',
    replace: true,
    data () {
      return {
        show: false
      }
    },
    computed: {
      dropdownToggle () {
        return this.caret ? 'dropdown-toggle' : ''
      }
    },
    props: {
      caret: {
        type: Boolean,
        default: true
      },
      dropdown: {
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        default: ''
      },
      profilePictureURL: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggle () {
        this.show = !this.show
        if (this.show) {
          this.$root.$emit('maVue::shown::profileDropdown', this)
        } else {
          this.$root.$emit('maVue::hidden::profileDropdown')
        }
      }
    },
    created: function () {
      this.$root.$on('maVue::hide::profileDropdown', () => {
        this.show = false
      })
      this.$root.$on('maVue::shown::profileDropdown', (element) => {
        if (element !== this) {
          this.show = false
        }
      })
      this.$root.$on('maVue::shown::notificationsDropdown', () => {
        this.show = false
      })
    }
  }

</script>