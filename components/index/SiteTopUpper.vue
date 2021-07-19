<template>
  <div class="SiteTopUpper">
    <whats-new :items="newsItems" :is-emergency="true" />
    <detail-a />
    <div class="row mb-4">
      <consultation />
      <fix />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Fix from '@/components/index/SiteTopUpper/Fix.vue'
import Consultation from '@/components/index/SiteTopUpper/Consultation.vue'
import DetailA from '@/components/index/SiteTopUpper/DetailA.vue'
import WhatsNew from '@/components/index/SiteTopUpper/WhatsNew.vue'
import {
  News as INews,
  NewsItem as INewsItem,
} from '@/libraries/auto_generated/data_converter/convertNews'

type Data = {}
type Methods = {}
type Computed = {
  newsItems: INewsItem[]
  news: INews
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    WhatsNew,
    DetailA,
    Consultation,
    Fix,
  },
  computed: {
    newsItems() {
      return this.news.newsItems
    },
    news() {
      return this.$store.state.news
    },
  },
})
</script>
