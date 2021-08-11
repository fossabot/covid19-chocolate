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
        <li>
          <app-link
            to="https://www.pref.kanagawa.jp/docs/ga4/covid19/vaccine.html"
          >
            {{ $t('【神奈川県】新型コロナワクチンの接種について') }}
          </app-link>
        </li>
      </ul>
      <br />
      <p>
        {{
          $t(
            '※基礎疾患を有する方として予約するためには、事前に申し出が必要です。'
          )
        }}
      </p>
      <ul>
        <li>
          <app-link
            to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/1023639.html"
          >
            {{ $t('基礎疾患を有する方への対応について') }}
          </app-link>
        </li>
      </ul>
      <p>
        {{
          $t(
            '→ 国が設置する「大規模接種センター」で接種を希望される方は次のページをご確認ください。'
          )
        }}
      </p>
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
const VaccineInfoCard = () =>
  import('@/components/index/CardsReference/VaccineInfo/Card.vue')
const Vaccine7Card = () =>
  import('@/components/index/CardsReference/Vaccine7/Card.vue')
const VaccineAllCard = () =>
  import('@/components/index/CardsReference/VaccineAll/Card.vue')
const Vaccine12Card = () =>
  import('@/components/index/CardsReference/Vaccine12/Card.vue')
const VaccinationCard = () =>
  import('@/components/index/CardsReference/VaccineInfo65/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    StaticCard,
    AppLink,
    CardsLazyRow,
  },
  data() {
    return {
      rows: [[VaccineInfoCard, Vaccine7Card], [VaccineAllCard, VaccinationCard], [Vaccine12]],
    }
  },
})
</script>

<style lang="scss" scoped>
.StaticCard {
  margin-top: 20px;
  font-size: 1.4rem;
}
</style>
