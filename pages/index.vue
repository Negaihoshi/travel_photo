<template>
  <div>
    <section>
      <v-parallax src="/mt-2724152_1920.jpg" height="600">
        <v-layout column align-center justify-center class="black--text">
          <h1 class="black--text mb-2 display-1 text-xs-center">Students to developers’ education</h1>
          <div class="subheading mb-3 text-xs-center">學生開發者養成計畫</div>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            立刻報名
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">

            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">計畫宗旨</div>
                  </v-card-title>
                  <v-card-text>
                    本計畫定義為進入職場前的培育計畫，目標讓全台灣的學生都能夠參與此計畫，同時能夠解決業界人手不足，讓新一代的技術能夠萌芽、經歷得以傳承。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">計畫目標</div>
                  </v-card-title>
                  <v-card-text>
                    我們認為，成為一個網站開發的自學者，不應該是一個人默默地前進。更多需要的是，一個資深的前輩/學長/助教能夠適時地提供指引與協助。我們透過資深工程師帶領入門新手，讓熱情的學員、初學者也可以踏入技術的殿堂，達到技術的傳承與知識的延續。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">可以學得技術</div>
                  </v-card-title>
                  <v-card-text>
                    開發：Git / UNIX 系統操作 / 開發環境配置
基礎：HTML / JavaScript / CSS / Node.js / Express / MySQL
進階：Passport / Security / React / Redux / MongoDB / Testing

                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
