<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesNumberCard">
    <client-only>
      <time-bar-chart
        :title="$t('65歳以上のワクチン接種状況')"
        :title-id="'vaccine-info-65'"
        :chart-id="'doughnut-chart-vaccine'"
        :chart-data="vaccineGraph"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
      >
        <template #additionalDescription>
          <div class="Description-ExternalLink">
            <app-link
              to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
            >
              {{
                $t(
                  '新型コロナウイルス感染症に関する相模原市発表資料（発生状況等）'
                )
              }}
            </app-link>
          </div>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('在日米陸軍関係者は含めない') }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import AppLink from '@/components/_shared/AppLink.vue'
import doughnutChart from '@/components/index/_shared/doughnutChart.vue'
import Data from '@/data/vaccinedata.json'

export default {
  components: {
    doughnutChart,
    AppLink,
  },
  data() {
    // ワクチン接種率グラフ
    const vaccineGraph = formatGraph(Data.vaccine_summary.data)
    const date = Data.vaccine_summary.date

    return {
      vaccineGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
