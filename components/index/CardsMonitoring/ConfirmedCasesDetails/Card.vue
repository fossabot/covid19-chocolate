<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesDetailsCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="date"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('このデータの更新は、土・日・祝日は行わない') }}
            </li>
          </ul>
        </template>
        <section>
          <h4>{{ $t('概要') }}</h4>
          <infection-status
            :aria-label="$t('概要')"
            :items="monitoringItems"
          />
        </section>
        <section>
          <h4>{{ $t('男女比') }}</h4>
          <medical-system
            :aria-label="$t('男女比')"
            :items="monitoringItems"
          />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataView from '@/components/index/_shared/DataView.vue'
// table タグとの衝突を避けるため ConfirmedCasesDetailsTable とする
import ConfirmedCasesDetailsTable from '@/components/index/CardsMonitoring/ConfirmedCasesDetails/Table.vue'
import ConfirmedCasesMWDetailsTable from '@/components/index/CardsMonitoring/ConfirmedCasesDetails/MWTable.vue'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'

const options = {
  components: {
    DataView,
    ConfirmedCasesMWDetailsTable,
    ConfirmedCasesDetailsTable,
  },
  data() {
    const mainSummary = Data.main_summary
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      confirmedCases,
      date,
    }
  },
}

export default options
</script>

<style lang="scss" module>
section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}

dfn {
  font-style: normal;
  font-weight: 600;
}

details[open] .fade {
  animation: fadeIn 0.7s ease;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

details[open] summary {
  color: gray;
}
</style>
