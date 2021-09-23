<template>
  <div class="Attention">
    <div class="Attention-heading">
      <h3 class="Attention-title">
        <v-icon size="2.4rem" class="Attention-title-icon">
          {{ mdiAlertCircle }}
        </v-icon>
        {{ $t('重要なお知らせ') }}
      </h3>
    </div>
    <div class="Attention-list">
      <app-link :to="localePath('/info/0924')" :icon-size="12">
        {{ $t('当サイト閉鎖に関するお知らせ') }}
      </app-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiAlertCircle } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'

export default Vue.extend({
  components: {
    AppLink,
  },
  data() {
    return {
      mdiAlertCircle,
    }
  },
})
</script>

<style lang="scss">
.Attention {
  @include card-container();

  padding: 5px 18px;
  margin-bottom: 10px;

  .Attention-heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;

    .Attention-title {
      display: flex;
      align-items: center;
      margin: 8px 12px 8px 0;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }
  }

  .Attention-list{
    padding-left: 0;
    list-style-type: none;
    text-decoration: none;
    margin: 5px;

    @include font-size(14);

    @include lessThan($medium) {
      display: flex;
      flex-wrap: wrap;
      flex: 0 1 auto;
      padding-left: 8px;
    }
  }
}
</style>
