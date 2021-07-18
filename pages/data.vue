<template>
  <div class="About">
    <page-header :title="$t('【開発中】数値の入力ミスに関するお知らせ(2021年7月19日)')" />
    <static-card>
      {{
        $t(
          '当サイトを閲覧していただきありがとうございます。'
        )
      }}<br />
      <br />
      {{
        $t(
          '今回、一部グラフにて表示されている数値において入力ミスがありましたのでご報告させていただきます。'
        )
      }}<br />
      <br />
      {{
        $t(
          '1. 入力ミスのあったグラフ及び数値'
        )
      }}<br />
      <br />
        {{
          $t(
            '報告日別による陽性者数の推移：2021年7月1日において12名と相模原市から発表されていた数値を当サイトにて7名として表記'
          )
        }}<br />
      <br />
        {{
          $t(
            '新規陽性者数：'
          )
        }}<br />
      <br />
        {{
          $t(
            '確定日別による陽性者数の推移：'
          )
        }}<br />
      <br />
      <br />
      {{
        $t(
          '2. 対応策'
        )
      }}<br />
      <br />{{
          $t(
            'i. 数値入力時の二重チェックを必ず行います。'
          )
        }}<br />
      <br />{{
          $t(
            '当サイトは、一人で運営しているため忙しい際の確認が愚かなことがありました。今後、入力ミスのないよう二重チェックを必ず行います。'
          )
        }}<br />
      <br />
        {{
          $t(
            'ii. 皆様からのデータ入力ミスの報告を受け付けます。'
          )
        }}<br />
      <br />
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
