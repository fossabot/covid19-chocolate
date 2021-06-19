<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// モニタリング項目
const ConfirmedCasesByMunicipalitiesCard = () =>
  import(
    '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
  )
const DeathsByDeathDateCard = () =>
  import('@/components/index/CardsReference/DeathsByDeathDate/Card.vue')
const PositiveNumberByDiagnosedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
  )
const PositiveNumberByDevelopedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
  )
const ConfirmedCasesByAgeCard = () =>
  import('@/components/index/CardsReference/ConfirmedCasesByAge/Card.vue')
const TestedNumberCard = () =>
  import('@/components/index/CardsReference/TestedNumber/Card.vue')
const VaccineInfo65Card = () =>
  import('@/components/index/CardsReference/VaccineInfo65/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesByMunicipalitiesCard, DeathsByDeathDateCard],
        [PositiveNumberByDiagnosedDateCard, PositiveNumberByDevelopedDateCard],
        [ConfirmedCasesByAgeCard, TestedNumberCard],
        [VaccineInfo65Card],
      ],
    }
  },
})
</script>
