<template>
  <v-col cols="12" md="6">
    <v-lazy>
      <static-info
        class="Data"
        url="https://forms.gle/y8Luk8Lq5K9ngtC16"
        :text="$t('当サイトの数値に問題があれば\nご報告ください')"
        :btn-text="$t('数値ミスを報告する')"
      />
    </v-lazy>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import StaticInfo from '@/components/index/SiteTopUpper/Consultation/StaticInfo.vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    StaticInfo,
  },
})
</script>

<style lang="scss" scoped>
.Data {
  padding: 3px 18px;
  min-height: 5.5em;
}
</style>
