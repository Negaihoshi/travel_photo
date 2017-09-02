<template>
  <v-app light>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.native.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <div class="text-xs-center">
    <v-chip label>Label</v-chip>

    <v-chip label class="pink white--text">
      <v-icon left>label</v-icon>Tags
    </v-chip>

    <v-chip label outline class="red red--text">
      <v-icon left>label</v-icon>Outline
    </v-chip>
  </div>
            <v-stepper v-model="e6" vertical non-linear>
              <v-stepper-step step="1">
                京都行第一站
                <small>Summarize if needed</small>
              </v-stepper-step>
              <v-stepper-content step="1">
                <div class="">
                  <img src="public/DSCF1074.JPG" alt="" height="400px">
                </div>
              </v-stepper-content>
              <v-stepper-step step="2">京都行第二站</v-stepper-step>
              <v-stepper-content step="2">
                <div class="">
                  <img src="public/DSCF1074.JPG" alt="" height="400px">
                </div>
              </v-stepper-content>
              <v-stepper-step step="3">京都行第三站</v-stepper-step>
              <v-stepper-content step="3">
                <div class="">
                  <img src="public/DSCF1074.JPG" alt="" height="400px">
                </div>
              </v-stepper-content>
              <v-stepper-step step="4">京都行第四站</v-stepper-step>
              <v-stepper-content step="4">
                <div class="">
                  <img src="public/DSCF1074.JPG" alt="" height="400px">
                </div>
              </v-stepper-content>
            </v-stepper>    
          </v-flex>
      </v-layout>
        
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
