<template>
  <div>
    <div class="VaccineInfo">
      <div class="VaccineInfo-heading">
        <h3 class="VaccineInfo-title">
          {{ $t('ワクチンについて') }}
        </h3>
      </div>
      <div class="VaccineInfo-description">
        <div class="margin-b">
          <ul>
            <li>
              <app-link
                to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
              >
                {{
                  $t('新型コロナウイルスワクチンについて ({VaccineDate}更新)', {
                    VaccineDate: formatDate(VaccineDate),
                  })
                }}
              </app-link>
            </li>
          </ul>
        </div>
        <div class="margin-b">
          <ul>
            <li>
              <app-link to="https://jump.mrso.jp/141500/">
                {{ $t('相模原市ワクチン接種web予約') }}
              </app-link>
            </li>
          </ul>
        </div>
        <p class="margin-b">
          {{
            $t(
              '→ 国が設置する「大規模接種センター」で接種を希望される方は次のページをご確認ください。'
            )
          }}
        </p>
        <ul>
          <li>
            <app-link
              to="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/covid_intokyo.html"
            >
              {{
                $t(
                  '自衛隊 東京大規模接種センター（東京センター）の予約・受付案内'
                )
              }}
            </app-link>
          </li>
        </ul>
      </div>
    </div>
    <cards-lazy-row :rows="rows" />
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'
import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// モニタリング項目
const VaccineInfo65Card = () =>
  import('@/components/index/CardsReference/VaccineInfo65/Card.vue')
/* eslint-enable simple-import-sort/imports */

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: Date
  VaccineDate: Date
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [VaccineInfo65Card],
      ],
    },
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return new Date(this.infectionMedicalCareProvisionStatus.date)
    },
    VaccineDate() {
      return this.infectionMedicalCareProvisionStatus['ワクチン更新日時']
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
.VaccineInfo {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .VaccineInfo-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .VaccineInfo-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;
      @include card-h2();
      @include font-size(14);
    }
  }

  .VaccineInfo-description {
    padding: 3px 0 0 0;

    @include font-size(13);
    > a {
      text-decoration: none;
      @include text-link();
    }
  }

  .VaccineInfo-comments {
    h4 {
      margin-bottom: 10px;
      color: $gray-3;
      font-weight: normal;

      @include font-size(14);
    }

    margin: 0 10px;
  }

  .margin-a {
    margin-top: 5px;
  }

  .margin-b {
    margin-bottom: 5px;
  }

  .margin-lb {
    margin-top: 7px;
  }

  .margin-bb {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .margin-ub {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .margin-ub-under {
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: underline;
  }

  .Attention {
    color: red;
  }

  .bold {
    font-weight: bold;
  }

  .border {
    border-collapse: collapse;
  }

  .border-a {
    border: 1.5px solid;
    border-radius: 5px;
    border-color: red;
  }
</style>
