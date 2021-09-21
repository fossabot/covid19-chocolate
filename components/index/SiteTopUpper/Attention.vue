<template>
  <div class="WhatsNew">
    <div class="WhatsNew-heading">
      <h3 class="WhatsNew-title">
        <v-icon size="2.4rem" class="WhatsNew-title-icon">
          {{ mdiAlertCircle }}
        </v-icon>
        {{ $t('重要なお知らせ') }}
      </h3>
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
.WhatsNew {
  @include card-container();

  padding: 5px 18px;
  margin-bottom: 10px;

  .WhatsNew-heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;

    .WhatsNew-title {
      display: flex;
      align-items: center;
      margin: 8px 12px 8px 0;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }
  }

</style>
