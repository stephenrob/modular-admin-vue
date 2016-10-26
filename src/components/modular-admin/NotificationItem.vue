<template>

  <li>
    <a v-bind:href="notificationLink" class="notification-item">
      <div class="img-col">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + imageURL + ')' }"></div>
      </div>
      <div class="body-col" v-html="content"></div>
    </a>
  </li>

</template>

<script>
  export default {
    replace: true,
    props: {
      imageURL: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      notificationLink: {
        type: String,
        default: ''
      }
    }
  }
</script>