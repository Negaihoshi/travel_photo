<template>

</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      e6: 1,
      content: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      }
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
