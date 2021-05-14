<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1019826/index.html"
          :icon-size="24"
          >{{ $t('相模原市 新型コロナウイルス感染症 事業者支援情報') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '相模原市及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/seisaku/1022660.html"
          :icon-size="24"
          >{{ $t('新型コロナウイルス感染症「暮らし・経済支援対策」') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '本市では、新型コロナウイルス感染症の感染拡大防止対策を推進し、市民の皆様の命と暮らしを守るため、その時々の状況に合わせて必要な対策を講じています。対策の実施に当たっては、国や県の補助金等のほか、「新型コロナウイルス感染症対応地方創生臨時交付金」を活用しながら、本市の状況に合わせた市独自の対策を行っています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1019826/1022793.html"
          :icon-size="24"
          >{{ $t('一時支援金【申請受付期限：令和3年5月31日（月曜日）】') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '緊急事態宣言に伴う飲食店時短営業又は外出自粛等の影響を受けており、1～3月のいずれかの月の売上が2019年比又は2020年比で50％以上減少した中小法人・個人事業者のための一時支援金'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_8th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第8弾）（時短営業要請期間：令和3年4月1日から4月19日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年4月1日から4月19日まで）'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_9th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第9弾）（時短営業要請期間：令和3年4月20日から5月11日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年4月20日から5月11日まで）'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
