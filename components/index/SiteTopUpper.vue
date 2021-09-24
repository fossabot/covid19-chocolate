<template>
  <div class="SiteTopUpper">
    <attention />
    <whats-new :items="newsItems" :is-emergency="false" />
    <detail-a />
    <div class="row mb-4">
      <consultation />
      <fix />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Attention from '@/components/index/SiteTopUpper/Attention.vue'
import Consultation from '@/components/index/SiteTopUpper/Consultation.vue'
import DetailA from '@/components/index/SiteTopUpper/DetailA.vue'
import Fix from '@/components/index/SiteTopUpper/Fix.vue'
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
    Attention,
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
