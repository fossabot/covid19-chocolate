<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span> {{ $t('陽性患者数') }} ({{ $t('累計') }}) </span>
        <span>
          <strong>{{ 陽性患者数.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('治療中') }}</span>
            <span>
              <strong>{{ 治療中.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
              <div>
                (<strong>{{ ((治療中 / 陽性患者数) * 100).toFixed(2) }}</strong>
                <span :class="$style.unit">%</span>)
              </div>
            </span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <!-- eslint-disable vue/no-v-html-->
                <span v-html="$t('医療機関')" />
                <!-- eslint-enable vue/no-v-html-->
                <span>
                  <strong>{{ 医療機関.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('自宅療養') }}</span>
                <span>
                  <strong>{{ 自宅療養.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('宿泊療養') }}</span>
                <span>
                  <strong>{{ 宿泊療養.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('死亡') }}</span>
            <span>
              <strong>{{ 死亡.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
              <div>
                (<strong>{{ ((死亡 / 陽性患者数) * 100).toFixed(2) }}</strong>
                <span :class="$style.unit">%</span>)
              </div>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('回復') }}</span>
            <span>
              <strong>{{ 回復.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
              <div>
                (<strong>{{ ((回復 / 陽性患者数) * 100).toFixed(2) }}</strong>
                <span :class="$style.unit">%</span>)
              </div>
            </span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('市内在住') }}</span>
        <span>
          <strong>{{ 市内在住.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
          <div>
            (<strong>{{ ((市内在住 / 陽性患者数) * 100).toFixed(2) }}</strong>
            <span :class="$style.unit">%</span>)
          </div>
        </span>
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('市外在住') }}</span>
        <span>
          <strong>{{ 市外在住.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
          <div>
            (<strong>{{ ((市外在住 / 陽性患者数) * 100).toFixed(2) }}</strong>
            <span :class="$style.unit">%</span>)
          </div>
        </span>
      </div>
    </li>
    <br />
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('男性') }}</span>
        <span>
          <strong>{{ 男性.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
          <div>
            (<strong>{{ ((男性 / 陽性患者数) * 100).toFixed(2) }}</strong>
            <span :class="$style.unit">%</span>)
          </div>
        </span>
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('女性') }}</span>
        <span>
          <strong>{{ 女性.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
          <div>
            (<strong>{{ ((女性 / 陽性患者数) * 100).toFixed(2) }}</strong>
            <span :class="$style.unit">%</span>)
          </div>
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

/* eslint-disable vue/prop-name-casing */
export default Vue.extend({
  props: {
    陽性患者数: {
      type: Number,
      required: true,
    },
    治療中: {
      type: Number,
      required: true,
    },
    医療機関: {
      type: Number,
      required: true,
    },
    自宅療養: {
      type: Number,
      required: true,
    },
    宿泊療養: {
      type: Number,
      required: true,
    },
    死亡: {
      type: Number,
      required: true,
    },
    回復: {
      type: Number,
      required: true,
    },
    市内在住: {
      type: Number,
      required: true,
    },
    市外在住: {
      type: Number,
      required: true,
    },
    男性: {
      type: Number,
      required: true,
    },
    女性: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxdiff: 35px;
// .container > .box > (.group > .box > ...) .pillar > .content

.container {
  box-sizing: border-box;
  width: 100%;
  // override default styles
  padding-left: 0 !important;
  line-height: 1.35;
  color: $green-1;

  * {
    box-sizing: border-box;
  }

  ul {
    padding-left: 0;
  }
}

.group {
  flex: 0 0 auto;
  padding-left: $default-bdw !important;
  border-top: $default-bdw solid $green-1;
  border-left: $default-bdw solid $green-1;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  border: $default-bdw solid $green-1;

  > span {
    display: block;

    @include font-size(14);

    &:first-child {
      flex-shrink: 2;
      margin-top: 1px;
      text-align: left;
    }

    &:last-child {
      // white-space: nowrap;
      flex-shrink: 1;
      margin-left: 10px;
      text-align: right;
    }

    &:not(:last-child) {
      overflow-wrap: break-word;
    }

    div {
      display: inline-block;
      width: 7rem;
    }
  }

  strong {
    @include font-size(16);
  }

  span.unit {
    @include font-size(14);
  }
}

.box {
  display: block;
  margin-top: $default-bdw;

  &.parent {
    position: relative;
    padding-left: $default-boxdiff - $default-bdw * 2;
    border-top: $default-bdw solid $green-1;
    border-left: $default-bdw solid $green-1;

    &::after {
      position: absolute;
      bottom: 0;
      left: -1px;
      display: block;
      width: $default-boxdiff - $default-bdw - 2;
      content: '';
      border-bottom: $default-bdw solid $green-1;
    }

    > .content {
      width: calc(100% + #{($default-boxdiff - $default-bdw * 2)});
      margin-left: -($default-boxdiff - $default-bdw * 2);
      border-top: none;
      border-bottom: none;
      border-left: none;
    }
  }
}
@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxdiff) {
  .group {
    padding-left: px2vw($bdw, $vw) !important;
    border-top: px2vw($bdw, $vw) solid $green-1;
    border-left: px2vw($bdw, $vw) solid $green-1;
  }

  .content {
    padding: px2vw(5, $vw) px2vw(10, $vw);
    border: px2vw($bdw, $vw) solid $green-1;

    > span {
      @include font-size($fz);

      &:first-child {
        margin-top: px2vw(1, $vw);
      }

      &:last-child {
        margin-left: 10px;
      }
    }

    strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }
  }

  .box {
    margin-top: px2vw($bdw, $vw);

    &.parent {
      padding-left: px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2;
      border-top: px2vw($bdw, $vw) solid $green-1;
      border-left: px2vw($bdw, $vw) solid $green-1;

      &::after {
        width: px2vw($boxdiff - $bdw, $vw);
        border-bottom: px2vw($bdw, $vw) solid $green-1;
      }

      > .content {
        width: calc(100% + #{(px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2)});
        margin-left: -(px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2);
      }
    }
  }
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 3, 14, 35);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 3, 14, 35);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 35);
}
</style>
