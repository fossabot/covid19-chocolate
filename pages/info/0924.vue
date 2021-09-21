<template>
  <div class="About">
    <page-header
      :title="$t('当サイト閉鎖に関するお知らせ(2021年9月24日発表)')"
    />
    <static-card>
      {{ $t('相模原市 新型コロナウイルス感染症対策サイト（以下、当サイト）を閲覧していただきありがとうございます。') }}<br />
      <br />
      {{
        $t(
          'この度、当サイトを閉鎖することとなりましたのでお知らせいたします。'
        )
      }}<br />
      <br />
      {{ $t('1. 理由') }}<br />
      <br />
          {{
            $t(
              '当サイトを運営している私自身、大学受験を控えておりこれ以上のサイト維持・データ更新を引き続き行うことが難しいと感じたため。'
            )
          }}
      <br />
      <br />
      {{ $t('2. 閉鎖までのロードマップ') }}<br />
      <br />{{ $t('i. データ更新終了・Twitterアカウント運用終了（2021年9月30日）') }}<br />
      {{ $t('2021年10月1日以降、データの更新は一切行わずサイトの閲覧のみ可能となります。') }}<br />
      <br />
      {{ $t('ii. 完全閉鎖（2021年12月31日）') }}<br />
      {{ $t('2022年1月1日以降、サイトの') }}<br />
      <br />
      {{
        $t(
          '下記リンクより数値入力ミスの報告を受け付けます。このフォームを作ることにより運営者が気付かなかったミスをすぐに修正できるようになると考えております。'
        )
      }}<br />
      <br />
      <app-link to="https://forms.gle/YoPFs1u8h9dScUjZ9" :icon-size="12"
        >{{
          $t('数値入力ミスに関する報告フォーム(外部サービス用しています)')
        }}
      </app-link>
      <br />
      <br />
      {{
        $t(
          '数値入力ミスを発見した場合、上記リンクよりご報告ください。入力ミスであることが運営者にて確認でき次第修正します。修正時には、このページにて数値の修正についてお知らせします。その際に、報告者の方のお名前を報告していただいた方として掲載させていただくことを考えております。お名前の掲載をご希望の場合、上記リンク内フォームの最後にお名前(ニックネーム・イニシャル可)を記載してから送信してください。'
        )
      }}<br />
      <br />
      <br />
      {{
        $t(
          '今後、このようなことのないように注意して運営させていただきます。 - 相模原市 新型コロナウイルス感染症対策サイト 運営者'
        )
      }}
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta' // eslint-disable-line import/named

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
      title: this.$t(
        '数値の入力ミスに関するお知らせ (2021年7月21日発表)'
      ) as string,
    }
  },
  methods: {
    formatDate(date) {
      return `${this.$d(date, 'date')}`
    },
  },
})
</script>
