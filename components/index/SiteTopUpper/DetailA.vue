<template>
  <div class="InfectionMedicalCareProvisionStatus">
    <div class="InfectionMedicalCareProvisionStatus-heading">
      <h3 class="InfectionMedicalCareProvisionStatus-title">
        {{ $t('本日の感染状況') }}
        {{ formatDate(date) }}時点
      </h3>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <div class="InfectionMedicalCareProvisionStatus-description">
        {{ $t('新規陽性者')
        }}<span>{{ statuses['新規陽性者'].toLocaleString() }}人</span>（
        {{ $t('濃厚接触者・接触者')
        }}<span
          >{{ statuses['濃厚接触者・接触者'].toLocaleString() }}人</span
        >、{{ $t('海外渡航歴あり')
        }}<span>{{ statuses['海外渡航歴あり'].toLocaleString() }}人</span
        >、{{ $t('不明')
        }}<span>{{ statuses['不明'].toLocaleString() }}人</span>、
        {{ $t('調査中')
        }}<span>{{ statuses['調査中'].toLocaleString() }}人</span>）、
        {{ $t('死亡者数')
        }}<span>{{ statuses['死亡者数'].toLocaleString() }}人</span>
      </div>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('症状') }}
        </app-link>
      </div>
      <div class="InfectionMedicalCareProvisionStatus-description">
        {{ $t('無症状')
        }}<span>{{ statuses['無症状'].toLocaleString() }}人</span>、
        {{ $t('軽症')
        }}<span>{{ statuses['軽症'].toLocaleString() }}人</span>、
        {{ $t('中等症')
        }}<span>{{ statuses['中症'].toLocaleString() }}人</span>、
        {{ $t('重症')
        }}<span>{{ statuses['重症'].toLocaleString() }}人</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: Date
  statisticDate: Date
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return new Date(this.infectionMedicalCareProvisionStatus.date)
    },
    statisticDate() {
      return this.infectionMedicalCareProvisionStatus.data['検査統計日時']
    },
    infectionMedicalCareProvisionStatus() {
      return this.$store.state.infectionMedicalCareProvisionStatus
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(date, 'date') as string
    },
  },
})
</script>

<style lang="scss">
.InfectionMedicalCareProvisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalCareProvisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalCareProvisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalCareProvisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalCareProvisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: $gray-3;

      @include font-size(12);
    }

    .InfectionMedicalCareProvisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > span {
        color: #053c47;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
