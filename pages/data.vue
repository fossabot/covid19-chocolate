<template>
  <div class="About">
    <page-header :title="$t('【開発中】数値の入力ミスに関するお知らせ(2021年7月19日公開予定)')" />
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
            '報告日別による陽性者数の推移：'
          )
        }}<br />
        <ul>
          <li>
          {{
            $t(
              '2021年7月1日において12名と相模原市から発表されていた数値を当サイトにて7名として表記。'
            )
          }}
          </li>
        </ul>
        {{
          $t(
            '新規陽性者数：'
          )
        }}<br />
        <ul>
          <li>
          {{
            $t(
              '2021年5月15日の陽性者数において15名と相模原市から発表されていた数値を当サイトにて12名として表記。それにともない7日間平均の数値も改めました。(2021年5月15日～2021年5月21日分まで)'
            )
          }}
          </li>
          <br />
          <li>
          {{
            $t(
              '2021年6月28日の陽性者数において10名と相模原市から発表されていた数値を当サイトにて20名として表記。それにともない7日間平均の数値も改めました。(2021年6月28日～2021年7月4日分まで)'
            )
          }}
          </li>
        </ul>
      <br />
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
            'ii. 皆様からの数値入力ミスの報告を受け付けます。'
          )
        }}<br />
      <br />
        {{
          $t(
            '下記リンクより数値入力ミスの報告を受け付けます。このフォームを作ることにより運営者が気付かなかったミスをすぐに修正できるようになると考えております。'
          )
        }}<br />
      <app-link
        to="https://forms.gle/YoPFs1u8h9dScUjZ9"
        :icon-size="12"
        >{{ $t('数値入力ミスに関する報告フォーム(外部サービスを使用しています)') }}
      </app-link>
      <br />
        {{
          $t(
            '上記フォームより数値入力ミスを発見した場合、ご報告ください。入力ミスであることが確認でき次第こちらにて修正します。また、修正時はこのページにて修正したことをお知らせします。その際にご希望の場合報告者の方のお名前を掲載させていただくことを考えております。ご希望の場合、下記のフォームの最後にお名前(ニックネーム・イニシャル可)を記載して送信してください。'
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
