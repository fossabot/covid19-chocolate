<template>
  <div>
    <static-card class="mb-4">
      <ul>
        <li>
          <app-link
            to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
          >
            {{ $t('新型コロナウイルスワクチンについて') }}
          </app-link>
        </li>
        <li>
          <app-link to="https://jump.mrso.jp/141500/">
            {{ $t('相模原市ワクチン接種web予約') }}
          </app-link>
        </li>
        <p>
          {{
            $t(
              '→ 国が設置する「大規模接種センター」で接種を希望される方は次のページをご確認ください。'
            )
          }}
        </p>
      </ul>
      <ul>
        <li>
          <app-link
            to="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/covid_intokyo.html"
          >
            {{
              $t(
                '自衛隊 東京大規模接種センター（東京センター）の予約・受付案内'
              )
            }}
          </app-link>
        </li>
      </ul>
    </static-card>
  <cards-lazy-row :rows="rows" />
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// モニタリング項目
const VaccineInfo65Card = () =>
  import('@/components/index/CardsReference/VaccineInfo65/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    AppLink,
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [VaccineInfo65Card],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.StaticCard {
  margin-top: 16px;
  font-size: 1.4rem;
}
.DataBlock {
  margin: 20px -8px;
  .DataCard {
    @include largerThan($medium) {
      padding: 10px;
    }
    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
</style>
