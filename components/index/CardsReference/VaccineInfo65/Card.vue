<template>
  <v-col cols="12" md="6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種件数（高齢者・累計）')"
        title-id="vaccination"
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
        <template #attentionNote>
          <p>
            {{
              $t(
                '7月末までに接種を希望される高齢者への接種を完了又は概ね完了したため、神奈川県からのこのグラフに関するデータの公表は終了しました。それにともない、2021年8月5日分の更新を持ってこのグラフの運用は終了しました。'
              )
            }}
          </p>
        </template>
        <template #description>
          <span>
            {{ $t('対象者 184,180人') }}
          </span>
          <br />
          <span>
            {{ $t('１回目の接種割合は、') }}
            {{
              $t('{p1}％', {
                p1: p1,
              })
            }}
          </span>
          <br />
          <span>
            {{ $t('２回目の接種割合は、') }}
            {{
              $t('{p2}％', {
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
                  '総務省が公表している「住民基本台帳に基づく人口、人口動態及び世帯数」内の「【統計】令和2年住民基本台帳年齢階級別人口」を基に高齢者の全人口を分母にし、接種率を出している'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  'ワクチン接種記録システム（VRS）のデータを基に、接種券の発行市町村別に集計している（本データは過日の数値が修正されることがある）'
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
} from '@/libraries/auto_generated/data_converter/convertVaccination'
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
