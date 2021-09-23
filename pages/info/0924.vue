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
              '当サイトを運営している私自身、大学受験を控えておりこれ以上のサイト維持・データ更新を引き続き行うことが難しいと感じたためです。'
            )
          }}
      <br />
      <br />
      {{ $t('2. 閉鎖までのロードマップ') }}<br />
      <br />{{ $t('i. データ更新終了・Twitterアカウント運用終了（2021年9月30日）') }}<br />
      {{ $t('2021年10月1日以降、データの更新は一切行わずサイトの閲覧のみ可能となります。') }}<br />
      <br />
      {{ $t('ii. 完全閉鎖（2021年12月31日）') }}<br />
      {{ $t('2022年1月1日以降、当サイトの閲覧は行えません。Twitterアカウントの閉鎖は行いません。') }}<br />
      <br />
      {{ $t('3. その他') }}<br />
      {{
        $t(
          'この件に関するお問い合わせは、'
        )
      }}
      <a href="mailto:contact@sagamihara-stopcovid19.com"
        >contact@sagamihara-stopcovid19.com</a
      >{{
        $t(
          'までお願いします。また、当サイトの運営を引き継いでいただける方がおりましたら先程のメールアドレスまで相談してください。（その場合、ドメインの管理費は私が支払います）また、大学受験後の運営に関してはその頃の感染状況等を考慮して決めます。運営を行う場合には、当サイトのTwitterアカウント(@sagami_covid19)にて告知します。'
        )
      }}<br />
      <br />
      <br />
      {{
        $t(
          '突然の発表となりますがご理解下さい。 - 相模原市 新型コロナウイルス感染症対策サイト 運営者'
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
        '当サイト閉鎖に関するお知らせ(2021年9月24日発表)'
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
