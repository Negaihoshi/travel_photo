<template>
  <v-app light>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <main>
      <v-container grid-list-xl text-xs-center>

        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/edit">Go to Bar</router-link>
        <router-view></router-view>
      </v-container>
    </main>
    <v-navigation-drawer
    temporary
    :right="right"
    v-model="rightDrawer"
    >
    <v-list>
      <v-list-tile @click.native="right = !right">
        <v-list-tile-action>
          <v-icon light>compare_arrows</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-footer :fixed="fixed">
    <span>&copy; 2017</span>
  </v-footer>
</v-app>
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
