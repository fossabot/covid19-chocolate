<template>
  <v-col cols="12" md="6" class="DataCard TestedNumber">
    <client-only>
      <data-view
        :title="$t('市衛生研究所におけるPCR検査実績')"
        :title-id="'tested-number'"
        :date="date"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '協力医療機関等の協力により検体を採取し、市衛生研究所で検査を行っている'
                )
              }}
            </li>
            <li>
              {{ $t('医療機関における保険適用での検査人数は含まれていない') }}
            </li>
            <li>
              {{ $t('検査件数には同一人物に対する複数検体の計上を含む') }}
            </li>
            <li>
              {{ $t('陰性確認（治癒確認）のための検査も含む') }}
            </li>
            <li>
              {{ $t('土曜日、日曜日、祝日は更新しない') }}
            </li>
          </ul>
        </template>
        <tested-number-table
          :aria-label="$t('検査数の状況')"
          v-bind="TestedNumber"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataView from '@/components/index/_shared/DataView.vue'
// table タグとの衝突を避けるため ConfirmedCasesDetailsTable とする
import TestedNumberTable from '@/components/index/CardsReference/TestedNumber/Table.vue'
import Data from '@/data/infection_medicalcareprovision_status.json'
import formatTestedNumber from '@/utils/formatTestedNumber'

const options = {
  components: {
    DataView,
    TestedNumberTable,
  },
  data() {
    const mainSummary = Data.main_summary
    // 検査数の状況
    const TestedNumber = formatTestedNumber(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      TestedNumber,
      date,
    }
  },
}

export default options
</script>

<style lang="scss" module>
.button {
  margin: 20px 0 0;
  color: $green-1 !important;
  text-decoration: none;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
