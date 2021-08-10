<template>
  <v-col cols="12" md="6" class="DataCard Vaccine7Card">
    <client-only>
      <chart
        :title="$t('ワクチン接種者数の推移（累計・週報）')"
        :title-id="'vaccine-7'"
        :chart-id="'vaccine-7'"
        :chart-data="agency"
        :date="date"
        :labels="labels"
        :periods="periods"
        :items="agencyItems"
        :unit="$t('人')"
      >
        <template #description>
          <span>
            {{ $t('接種対象者数 661,738人') }}
          </span>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t('接種対象者数は、満12歳以上の者である（2021年6月30日時点）')
              }}
            </li>
            <li>
              {{
                $t(
                  'グラフ上にて確認しにくい数値は、下記の「テーブルを表示」より確認可能である'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/Vaccine7/Chart.vue'
import { Agency as IAgency } from '@/libraries/auto_generated/data_converter/convertAgency'
import { convertDateToISO8601Format } from '@/utils/formatDate'

type Data = {
  agencyItems: string[]
}
type Methods = {}
type Computed = {
  agency: IAgency
  date: string
  labels: string[]
  periods: string[]
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const agencyItems = [
      this.$t('うち、２回目接種済み') as string,
      this.$t('総接種者数') as string,
    ]
    return {
      agencyItems,
    }
  },
  computed: {
    agency() {
      return this.$store.state.agency
    },
    date() {
      return this.agency.date
    },
    labels() {
      return this.agency.periods.map((p) => {
        return convertDateToISO8601Format(p.begin)
      })
    },
    periods() {
      return this.agency.periods.map((p) => {
        const from = this.$d(p.begin, 'dateWithoutYear')
        const to = this.$d(p.end, 'dateWithoutYear')
        return `${from}~${to}`
      })
    },
  },
})
</script>
