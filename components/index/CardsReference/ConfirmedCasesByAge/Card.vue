<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByAgeCard">
    <client-only>
      <chart
        :title="$t('年代別の陽性者数')"
        :title-id="'number-of-confirmed-cases-by-age'"
        :chart-data="ageTable"
        :date="date"
        :info="info"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('土曜日、日曜日、祝日は更新しない') }}
            </li>
          </ul>
        </template>
      </chart>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import Chart from '@/components/index/CardsReference/ConfirmedCasesByAge/Chart.vue'
import Data from '@/data/age.json'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    Chart,
  },
  data() {
    // patients_ageは、削除しようか考え中(消した)
    const { data, date } = Data

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 区市町村ごとの陽性者数
    const ageTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    ageTable.headers = [
      { text: this.$t('年代'), value: 'age', align: 'center' },
      { text: this.$t('本日発表分'), value: '_new', align: 'center' },
      { text: this.$t('昨日までの累計'), value: 'close', align: 'center' },
      { text: this.$t('合計'), value: 'total', align: 'center' },
    ]

    // データをソート
    const areaOrder = [
      '合計',
      '10歳未満',
      '10代',
      '20代',
      '30代',
      '40代',
      '50代',
      '60代',
      '70代',
      '80代',
      '90代',
      '100歳以上',
      null,
    ]
    data
      .sort((a, b) => {
        // 全体を合計でソート
        if (a.new + a.close === b.new + b.close) {
          return 0
        } else if (a.new + a.close > b.new + b.close) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 全体を新規でソート
        if (a.new === b.new) {
          return 0
        } else if (a.new > b.new) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 年代の順にソート
        return areaOrder.indexOf(a.age) - areaOrder.indexOf(b.age)
      })

    // データを追加
    ageTable.datasets = data.map((d) => {
      const age = this.$t(d.age)
      const _new = countFormatter(d.new)
      const close = countFormatter(d.close)
      const total = countFormatter(d.new + d.close)
      return { age, _new, close, total }
    })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      ageTable,
      info,
    }
  },
}
</script>
