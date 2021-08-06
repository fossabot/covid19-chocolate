<template>
  <v-col cols="12" md="6" class="DataCard VaccineCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種者数')"
        title-id="vaccine"
        :info-titles="[$t('接種者数（１回目・週報)'), $t('接種者数（２回目・週報）')]"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :periods="vaccinationLabels"
        :data-labels="chartLabels"
        :last-period="vaccinationData.lastPeriod"
        :unit="$t('人')"
      >
        <template #description>
          <span>
            {{ $t('接種対象者数（６月30日時点） 661,738人') }}
          </span>
          <br />
          <span>
            {{ $t('本日の１回目の接種者数は、') }}
            {{
              $t('{p1}人', {
                p1: p1,
              })
            }}
          </span>
          <br />
          <span>
            {{ $t('本日の２回目の接種者数は、') }}
            {{
              $t('{p2}人', {
                p2: p2,
              })
            }}
          </span>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('土曜日、日曜日、祝日は更新しない') }}
            </li>
            <li>
              {{
                $t(
                  '接種対象者数は、満12歳以上の者である（当グラフに関する市の資料に記載）'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  'グラフ内の数値及び週報と書かれた数値は、１週間おきに更新する'
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
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/VaccineInfo65/Chart.vue'
import {
  Dataset as IVaccinationDataset,
  Period as IVaccinationPeriod,
  Vaccination as IVaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccine'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'

dayjs.extend(duration)

type Data = {
  chartLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekEndLabel: (end: Date) => string
}
type Computed = {
  date: string
  p1: number
  p2: number
  vaccinationLabels: string[]
  vaccinationDatasets: IVaccinationDataset[]
  vaccinationData: {
    lastPeriod: IVaccinationPeriod
    labels: Date[]
    chartData: number[][]
  }
  vaccination: IVaccination
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const chartLabels = [
      this.$t('接種件数（１回目）') as string,
      this.$t('接種件数（２回目）') as string,
    ]

    const getFormatter = () => {
      return getNumberToLocaleStringFunction()
    }

    return {
      chartLabels,
      getFormatter,
    }
  },
  computed: {
    date() {
      return this.vaccination.date
    },
    vaccinationLabels() {
      return this.vaccinationDatasets.map((dataset) => {
        const { period } = dataset
        const { end } = period
        return this.getWeekEndLabel(end)
      })
    },
    vaccinationDatasets() {
      return this.vaccination.datasets
    },
    p1() {
      return this.vaccination.p1
    },
    p2() {
      return this.vaccination.p2
    },
    vaccinationData() {
      const datasets = this.vaccination.datasets
      const lastPeriod = datasets.slice(-1)[0].period
      const labels = datasets.map((d: IVaccinationDataset) => d.period.end)
      const cumulative1StDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.cumulative1StDose
      )
      const cumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.cumulative2NdDose
      )
      const chartData: number[][] = [cumulative1StDose, cumulative2NdDose]

      return {
        lastPeriod,
        labels,
        chartData,
      }
    },
    vaccination() {
      return this.$store.state.vaccination
    },
  },
  methods: {
    /**
     * 表の横軸に表示する、「~MM/DD」形式のラベルを取得する
     */
    getWeekEndLabel(end: Date) {
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `~${to}`
    },
  },
})
</script>
