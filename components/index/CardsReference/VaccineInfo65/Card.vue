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
        <section>
          <h4>{{ $t('接種件数') }}</h4>
          <vaccine-status
            :aria-label="$t('接種件数')"
            :items="vaccine"
          />
        </section>
        <section>
          <h4>{{ $t('高齢者人口あたりの接種割合') }}</h4>
          <vaccine-system
            :aria-label="$t('高齢者人口あたりの接種割合')"
            :items="vaccine"
          />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataView from '@/components/index/_shared/DataView.vue'
// table タグとの衝突を避けるため VaccineTable とする
import VaccineStatus from '@/components/index/CardsReference/VaccineInfo65/Table/VaccineStatus.vue'
import VaccineSystem from '@/components/index/CardsReference/VaccineInfo65/Table/VaccineSystem.vue'
import Data from '@/data/vaccine.json'
import formatVaccine from '@/utils/formatVaccine'

const options = {
  components: {
    DataView,
    VaccineStatus,
    VaccineSystem,
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
