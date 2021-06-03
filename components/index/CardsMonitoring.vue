<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 報告日別陽性者数
const ConfirmedCasesNumberCard = () =>
  import('@/components/index/CardsMonitoring/ConfirmedCasesNumber/Card.vue')
// 新規陽性者数
const MonitoringConfirmedCasesNumberCard = () =>
  import(
    '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
  )
// モニタリング項目
const MonitoringItemsOverviewCard = () =>
  import('@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesNumberCard, MonitoringConfirmedCasesNumberCard],
        [MonitoringItemsOverviewCard],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
