<template>
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
</template>
