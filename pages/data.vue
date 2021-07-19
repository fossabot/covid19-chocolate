<template>
  <div class="About">
    <page-header :title="$t('数値の入力ミスに関するお知らせ(2021年7月20日更新)')" />
    <static-card>
      <app-link
        to="https://sagamihara-stopcovid19.com/data/0720"
        :icon-size="12"
        >{{ $t('2021年7月20日発表分') }}
      </app-link>
      <br />
      <br />
        {{
          $t(
            '数値入力ミスを発見した場合、下記リンクよりご報告ください。入力ミスであることが運営者にて確認でき次第修正します。修正時には、このページにて数値の修正についてお知らせします。その際に、報告者の方のお名前を報告していただいた方として掲載させていただくことを考えております。お名前の掲載をご希望の場合、下記リンク内フォームの最後にお名前(ニックネーム・イニシャル可)を記載してから送信してください。'
          )
        }}<br />
      <br />
      <app-link
        to="https://forms.gle/YoPFs1u8h9dScUjZ9"
        :icon-size="12"
        >{{ $t('数値入力ミスに関する報告フォーム(外部サービスを使用しています)') }}
      </app-link>
      <br />
      <v-divider></v-divider>
      <br />
        {{
          $t(
            'このページに関する問い合わせは、'
          )
        }}
      <a href="mailto:contact@sagamihara-stopcovid19.com"
        >contact@sagamihara-stopcovid19.com</a
      >
        {{
          $t(
            'までお願いします。(問い合わせの際は、氏名と共にお問い合わせ内容を記入してください。)'
          )
        }}
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('数値の入力ミスに関するお知らせ') as string,
    }
  },
  methods: {
    formatDate(date) {
      return `${this.$d(date, 'date')}`
    },
  },
})
</script>
