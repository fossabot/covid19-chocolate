<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// モニタリング項目
const ConfirmedCasesDetailsCard = () =>
  import('@/components/index/CardsReference/ConfirmedCasesDetails/Card.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue')
const DeathsByDeathDateCard = () =>
  import('@/components/index/CardsReference/DeathsByDeathDate/Card.vue')
const PositiveNumberByDiagnosedDateCard = () =>
  import('@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue')
const PositiveNumberByDevelopedDateCard = () =>
  import('@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, ConfirmedCasesByMunicipalitiesCard],
        [DeathsByDeathDateCard],
        [PositiveNumberByDiagnosedDateCard, PositiveNumberByDevelopedDateCard],
      ],
    }
  },
})
</script>
