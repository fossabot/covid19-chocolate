<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon-path="headerItem.iconPath">{{
        headerItem.title
      }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="convertDate(lastUpdateAsString)">{{
          formatDate(lastUpdate)
        }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" :is-emergency="true" />
    <detail-a />
    <detail-data />
    <VaccineInfoCard />
    <lazy-static-info
      v-if="$vuetify.breakpoint.smAndUp || showStaticInfo"
      class="mb-4"
      :url="'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019896.html'"
      :text="$t('自分や家族の症状に不安や心配があれば、まずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import DetailA from '@/components/DetailA.vue'
import DetailData from '@/components/DetailData.vue'
import PageHeader from '@/components/PageHeader.vue'
import VaccineInfoCard from '@/components/VaccineInfoCard.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import { Data as IData } from '@/libraries/auto_generated/data_converter/convertData'
import {
  News as INews,
  NewsItem as INewsItem,
} from '@/libraries/auto_generated/data_converter/convertNews'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

type Data = {
  headerItem: {
    iconPath: string
    title: string
  }
}
type Methods = {
  formatDate(date: Date): string
  convertDate(dateAsString: string): string
}
type Computed = {
  lastUpdate: Date
  lastUpdateAsString: string
  newsItems: INewsItem[]
  data: IData
  news: INews
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    PageHeader,
    WhatsNew,
    VaccineInfoCard,
    DetailData,
    DetailA,
  },
  data() {
    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('市内の最新感染動向') as string,
      },
    }
  },
  computed: {
    lastUpdate() {
      return new Date(this.lastUpdateAsString)
    },
    lastUpdateAsString() {
      return this.data.lastUpdate
    },
    newsItems() {
      return this.news.newsItems
    },
    data() {
      return this.$store.state.data
    },
    news() {
      return this.$store.state.news
    },
  },
  methods: {
    formatDate(date) {
      return `${this.$d(date, 'dateTime')} JST`
    },
    convertDate(dateAsString) {
      return convertDatetimeToISO8601Format(dateAsString)
    },
  },
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
}
</style>
