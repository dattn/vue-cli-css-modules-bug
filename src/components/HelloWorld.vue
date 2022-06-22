<template>
<div :class="$style.container">
  <button :class="styles.button">Red Button</button>
  <p>
    The button should be red.<br />
    Classnames imported by javascript missmatch classes imported by composes (CSS modules)<br />
    <b>{{styles.container}}</b> != <b>{{$style.container}}</b>
  </p>
</div>
</template>

<style module>
.container {
  composes: container from '../assets/style.module.css'
}
</style>

<script>
import styles from '../assets/style.module.css'

export default {
  name: 'HelloWorld',

  computed: {
    styles () {
      return styles
    }
  }
}
</script>
