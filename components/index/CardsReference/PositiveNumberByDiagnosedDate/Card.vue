<template>
  <v-col cols="12" md="6" class="DataCard PositiveNumberByDiagnosedDateCard">
    <client-only>
      <time-bar-chart
        :title="$t('確定日別による陽性者数の推移')"
        :title-id="'positive-number-by-diagnosed-date'"
        :chart-id="'positive-number-by-diagnosed-date'"
        :chart-data="graphData"
        :date="date"
        :unit="$t('人')"
      >
        <template #attentionNote>
          <p>
            {{
              $t(
                'このグラフに関する相模原市の情報公開終了に伴い、2021年8月27日分の更新を持って運用を終了しました。'
              )
            }}
          </p>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '各保健所から報告があった患者の発生情報を、検査により陽性であることを医師が確認した日別（確定日別）に整理したものである'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '市内の新型コロナウイルス陽性者数の急上昇に伴いデータの更新に時間を要している。そのため、このグラフにおけるデータの更新が後日行われることがある'
                )
              }}
            </li>
            <li>
              {{ $t('非公開者（２名）はグラフから除いている') }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/positive_by_diagnosed.json'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart: {
      extends: TimeBarChart,
      computed: {
        displayInfo() {
          const { lastDay, lastDayData } = calcDayBeforeRatio({
            displayData: this.displayData,
            dataIndex: 1,
          })
          const formattedLastDay = this.$d(lastDay, 'date')
          if (this.dataKind === 'transition') {
            return {
              lText: lastDayData,
              sText: `${formattedLastDay} ${this.$t('日別値')}（${this.$t(
                '現在判明している人数であり、後日修正される場合がある'
              )}）`,
              unit: this.unit,
            }
          }
          return {
            lText: lastDayData,
            sText: `${formattedLastDay} ${this.$t('累計値')}`,
            unit: this.unit,
          }
        },
      },
    },
  },
  data() {
    const formatData = Data.data.map((data) => {
      return {
        日付: data.diagnosed_date,
        小計: data.count,
      }
    })

    // 陽性患者数グラフ
    const graphData = formatGraph(formatData)

    const { date } = Data

    return {
      date,
      graphData,
    }
  },
}
</script>
