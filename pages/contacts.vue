<template>
  <div
    class="Contacts"
    aria-labelledby="pageHeader"
    aria-describedby="contactsCardTable"
  >
    <page-header id="pageHeader" :title="$t('お問い合わせ先一覧')" />
    <div class="Contacts-Card">
      <table
        id="contactsCardTable"
        class="Contacts-Card-Table"
        v-bind="tableAttrs"
        aria-describedby="pageHeader"
      >
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">{{ $t('担当名') }}</th>
            <th class="text-center tel" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症の予防・検査・医療に関すること') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('相模原市 新型コロナウイルス感染症相談センター') }}
            </td>
            <td class="tel">
              <a href="tel:042-769-9237" class="importantContact"
                >042-769-9237</a
              ><br />
              <br />
              <p class="caution">
                {{ $t(`24時間対応`) }}
              </p>
              <p class="caution">
                {{
                  $t(
                    `電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。`
                  )
                }}
              </p>
            </td>
          </tr>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('新型コロナウイルスワクチン接種に関すること') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('相模原市 新型コロナウイルス接種コールセンター') }}
            </td>
            <td class="tel">
              <ul>
                <li>
                  {{ $t('直通') }}<br /><a href="tel:042-767-2101"
                    >042-767-2101</a
                  >
                </li>
                <li class="bold">
                  {{
                    $t('予約受付時の混雑解消のため、電話番号を増設しました。')
                  }}
                  {{
                    $t(
                      '「050-5445-4357」の電話番号にかけると、予約受付終了の自動アナウンスも確認できるようになります。（回線混雑時はアナウンスが流れない場合があります）'
                    )
                  }}<br /><a href="tel:050-5445-4357">050-5445-4357</a>
                </li>
                <li>
                  {{ $t('外国人専用ダイヤル（対応言語：英語、中国語、韓国語）')
                  }}<br /><a href="tel:042-767-2104">042-767-2104</a>
                </li>
                <br />
                <p class="caution">
                  {{ $t(`全て、午前8時30分から午後7時まで`) }}
                </p>
                <p class="caution">
                  {{ $t(`土・日、祝日も含む`) }}
                </p>
                <p class="caution">
                  <i18n path="詳しくは、{pdf}をご参照ください。">
                    <template #pdf>
                      <app-link
                        :to="
                          $t(
                            'https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/1022745.html'
                          )
                        "
                      >
                        {{ $t('こちら') }}
                      </app-link>
                    </template>
                  </i18n>
                </p>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('かかりつけ医がない等受診に困った場合') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('神奈川県 発熱等診療予約センター') }}
            </td>
            <td class="tel">
              <ul>
                <li>
                  {{ $t('通常時') }}<br /><a href="tel:0570-048914"
                    >0570-048914</a
                  >
                </li>
                <li>
                  {{ $t('つながらない場合') }}<br /><a href="tel:042-285-1015"
                    >042-286-1015</a
                  >
                </li>
                <br />
                <p class="caution">
                  {{ $t(`どちらも、午前9時から午後9時まで`) }}
                </p>
                <p class="caution">
                  {{ $t(`土・日、祝日も含む`) }}
                </p>
                <p class="caution">
                  <i18n path="詳しくは、{kanagawa}をご参照ください。">
                    <template #kanagawa>
                      <app-link
                        :to="
                          $t(
                            'https://www.pref.kanagawa.jp/docs/ga4/hatsunetsunado.html'
                          )
                        "
                      >
                        {{ $t('こちら') }}
                      </app-link>
                    </template>
                  </i18n>
                </p>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('本サイトの管理・運営に関すること') }}
            </td>
            <td class="bureau">
              {{ $t('本サイト製作者直通メールアドレス（個人）') }}
            </td>
            <td class="tel">
              <a href="mailto:contact@sagamihara-stopcovid19.com"
                >contact@sagamihara-stopcovid19.com</a
              ><br />
              <br />
              <p class="caution">
                {{
                  $t(
                    'お問い合わせの際は、氏名と共にお問い合わせ内容を記入していただきますようお願いいたします。'
                  )
                }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta' // eslint-disable-line import/named

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    AppLink,
  },
  data() {
    return {
      pc: true,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string,
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    },
  },
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        padding: 1em 0;
        @include font-size(14, true);
      }

      td {
        padding: 1em 16px;
        @include font-size(14);
      }

      .importantContact {
        font-weight: 600;
        @include font-size(16, true);
      }

      .bold {
        font-weight: bold;
      }

      .tel ul {
        list-style: none;
        padding: 0;
      }

      .tel li {
        margin: 8px 0;
      }

      @include largerThan($medium) {
        th.tel {
          width: 35%;
        }
        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: 600;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }

      p.caution {
        margin: 0;
        @include font-size(12);
      }
    }
  }
}
</style>
