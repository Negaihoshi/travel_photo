<template>
  <v-layout row wrap>
    <v-btn color="primary" v-on:click="addStepper">Add Day</v-btn>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in steppers" :key="i">
        <div slot="header">第 {{i}} 天<v-icon color="red" v-on:click="removeStepper(i)">clear</v-icon></div>
        <v-card>
          <div class="quill-editor"
               v-model="item.content"
               v-quill:myQuillEditor="item.editorOption">
          </div>
        </v-card>
        <v-card-text class="grey lighten-3">{{item.detail}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      steppers: [{
        title: 'test',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        content: '<h2>I am Example 1</h2>',
        editorOption: {
          modules: {
            toolbar: [
              [{ 'size': ['small', false, 'large'] }],
              ['bold', 'italic'],
              [{'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            }
          }
        }
      }]
    }
  },
  methods: {
    addStepper: function () {
      this.steppers.push({
        title: 'test',
        detail: ''
      })
    },
    removeStepper: function (index) {
      this.steppers.splice(index, 1)
    }
  }
}
</script>
