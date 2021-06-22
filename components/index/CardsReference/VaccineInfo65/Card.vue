<template>
  <v-col cols="12" md="6" class="DataCard VaccineInfo65Card">
    <client-only>
      <data-view
        :title="$t('65歳以上のワクチン接種状況')"
        :title-id="'vaccine-info-65'"
        :date="date"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('このデータの更新は、不定期である') }}
            </li>
          </ul>
        </template>
        <vaccine-table
          :aria-label="$t('65歳以上のワクチン接種状況')"
          v-bind="vaccine"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataView from '@/components/index/_shared/DataView.vue'
// table タグとの衝突を避けるため VaccineTable とする
import VaccineTable from '@/components/index/CardsReference/VaccineInfo65/Table.vue'
import Data from '@/data/vaccine.json'
import formatVaccine from '@/utils/formatVaccine'

const options = {
  components: {
    DataView,
    VaccineTable,
  },
  data() {
    const mainSummary = Data.main_summary
    // 65歳以上のワクチン接種状況
    const vaccine = formatVaccine(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      vaccine,
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
