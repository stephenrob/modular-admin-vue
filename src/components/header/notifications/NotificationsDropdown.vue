<template>

  <li class="notifications new" :class="{open: show}">
    <a href="#" data-toggle="dropdown" v-on:click.stop.prevent="toggle(e)">
      <i :class="['fa', notificationIcon]"></i>
      <sup>
        <span class="counter">{{ numberOfNotifications }}</span>
      </sup>
    </a>
    <div class="dropdown-menu notifications-dropdown-menu">
      <ul class="notifications-container">
        <slot></slot>
      </ul>
      <footer>
        <ul>
          <li>
            <a v-bind:href="allNotificationsLink">{{ allNotificationsText }}</a>
          </li>
        </ul>
      </footer>
    </div>
  </li>

</template>

<script>
  export default {
    name: 'modular-admin-notifications-dropdown',
    replace: true,
    data () {
      return {
        show: false
      }
    },
    props: {
      notificationIcon: {
        type: String,
        default: ''
      },
      numberOfNotifications: {
        type: String,
        default: 0
      },
      allNotificationsLink: {
        type: String,
        default: '#'
      },
      allNotificationsText: {
        type: String,
        default: 'View All'
      }
    },
    methods: {
      toggle (e) {
        this.show = !this.show
        if (this.show) {
          this.$root.$emit('shown::notificationsdropdown')
        } else {
          this.$root.$emit('hidden::notificationsdropdown')
        }
      }
    },
    created: function () {
      this.$root.$on('hide::notificationsdropdown', () => {
        this.show = false
      })
    }
  }

</script>