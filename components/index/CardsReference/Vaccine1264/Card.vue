<template>
  <v-col cols="12" md="6" class="DataCard Vaccine1264Card">
    <client-only>
      <chart
        :title="$t('ワクチン接種件数（12～64歳・累計）')"
        title-id="vaccine-12-64"
        :info-titles="[$t('接種件数（１回目)'), $t('接種件数（２回目）')]"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :periods="vaccinationLabels"
        :data-labels="chartLabels"
        :last-period="vaccinationData.lastPeriod"
        :unit="$t(' 件')"
      >
        <template #description>
          <span>{{ $t('対象者 466,791人') }}</span>
          <br />
          <span>
            {{
              $t('１回目の接種割合は、{p1}％', {
                p1: p1,
              })
            }}
          </span>
          <br />
          <span>
            {{
              $t('２回目の接種割合は、{p2}％', {
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
                  'ワクチン接種記録システム（VRS）のデータを基に、接種券の発行市町村別に集計している。登録にタイムラグがあるため、同じ日の接種実績でも、確認時点によって数値が異なる'
                )
              }}
            </li>
            <li>
              {{ $t('12歳以上64歳以下の人口を分母にして接種率を出している') }}
            </li>
            <li>
              {{
                $t(
                  '医療従事者等の記録は含まれている。職域接種の記録は、接種券がVRSに読み取られた記録についてのみ反映されている'
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
} from '@/libraries/auto_generated/data_converter/convertVaccine1264'
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
  vaccine1264: IVaccination
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
      return this.vaccine1264.date
    },
    vaccinationLabels() {
      return this.vaccinationDatasets.map((dataset) => {
        const { period } = dataset
        const { end } = period
        return this.getWeekEndLabel(end)
      })
    },
    vaccinationDatasets() {
      return this.vaccine1264.datasets
    },
    p1() {
      return this.vaccine1264.p1
    },
    p2() {
      return this.vaccine1264.p2
    },
    vaccinationData() {
      const datasets = this.vaccine1264.datasets
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
    vaccine1264() {
      return this.$store.state.vaccine1264
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
