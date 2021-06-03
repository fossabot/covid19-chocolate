<template>
  <div class="InfectionMedicalCareProvisionStatus">
    <div class="InfectionMedicalCareProvisionStatus-heading">
      <h3 class="InfectionMedicalCareProvisionStatus-title">
        {{
          $t('検査数・陽性者の詳細 {date}時点', {
            date: formatDate(date),
          })
        }}
      </h3>
      <h4 class="InfectionMedicalCareProvisionStatus-title">
        {{ $t('このデータは、平日のみ更新') }}
      </h4>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1020286.html"
        >
          {{ $t('PCR検査実績') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="1日当たりの検査人数{todayPCRP}人、累計検査人数{allPCRP}人、1日当たりの検査件数{todayPCRT}人、累計検査件数{allPCRT}人、（PCR検査更新日時：{PCRDate}）"
      >
        <template #todayPCRP>
          <span>
            {{ statuses['うち1日当たりの検査人数'].toLocaleString() }}
          </span>
        </template>
        <template #allPCRP>
          <span>
            {{ statuses['累計検査人数'].toLocaleString() }}
          </span>
        </template>
        <template #todayPCRT>
          <span>
            {{ statuses['うち1日当たりの検査件数'].toLocaleString() }}
          </span>
        </template>
        <template #allPCRT>
          <span>
            {{ statuses['累計検査件数'].toLocaleString() }}
          </span>
        </template>
        <template #PCRDate>
          {{ formatDate(PCRDate) }}
        </template>
      </i18n>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1020286.html"
        >
          {{ $t('性別・年齢別(累計)') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="男性{men}人、女性{women}人、累計陽性者数{all}人 / 10歳未満{u10}人、20代{20}人、30代{30}人、40代{40}人、50代{50}人、60代{60}人、70代{70}人、80代{80}人、90代{90}人、100歳以上{100}人"
      >
        <template #men>
          <span>
            {{ statuses['男性'].toLocaleString() }}
          </span>
        </template>
        <template #women>
          <span>
            {{ statuses['女性'].toLocaleString() }}
          </span>
        </template>
        <template #u10>
          <span>
            {{ statuses['うち10歳未満'].toLocaleString() }}
          </span>
        </template>
        <template #10>
          <span>
            {{ statuses['うち10代'].toLocaleString() }}
          </span>
        </template>
        <template #20>
          <span>
            {{ statuses['うち20代'].toLocaleString() }}
          </span>
        </template>
        <template #30>
          <span>
            {{ statuses['うち30代'].toLocaleString() }}
          </span>
        </template>
        <template #40>
          <span>
            {{ statuses['うち40代'].toLocaleString() }}
          </span>
        </template>
        <template #50>
          <span>
            {{ statuses['うち50代'].toLocaleString() }}
          </span>
        </template>
        <template #60>
          <span>
            {{ statuses['うち60代'].toLocaleString() }}
          </span>
        </template>
        <template #70>
          <span>
            {{ statuses['うち70代'].toLocaleString() }}
          </span>
        </template>
        <template #80>
          <span>
            {{ statuses['うち80代'].toLocaleString() }}
          </span>
        </template>
        <template #90>
          <span>
            {{ statuses['うち90代'].toLocaleString() }}
          </span>
        </template>
        <template #100>
          <span>
            {{ statuses['うち100歳以上'].toLocaleString() }}
          </span>
        </template>
      </i18n>
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
  PCRDate: Date
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
    PCRDate() {
      return this.infectionMedicalCareProvisionStatus['検査統計日時']
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

<style scoped lang="scss">
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
        color: $green-1;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
