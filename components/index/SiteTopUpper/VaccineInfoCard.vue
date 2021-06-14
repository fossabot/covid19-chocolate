<template>
  <div class="VaccineInfo">
    <div class="VaccineInfo-heading">
      <h3 class="VaccineInfo-title">
        {{
          $t('ワクチンについて {VaccineDate}更新', {
            VaccineDate: formatDate(VaccineDate),
          })
        }}
      </h3>
    </div>
    <div class="VaccineInfo-description">
      <div class="margin-b">
        <ul>
          <li>
            <app-link
              to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
            >
              {{ $t('新型コロナウイルスワクチンについて') }}
            </app-link>
          </li>
        </ul>
      </div>
      <div class="margin-b">
        <ul>
          <li>
            <app-link to="https://jump.mrso.jp/141500/">
              {{
                $t(
                  '相模原市ワクチン接種web予約【次回の受付：6月15日】'
                )
              }}
            </app-link>
          </li>
        </ul>
      </div>
      <div class="bold">
        {{
          $t('2回目の予約方法が変更になりました（集団接種・個別接種ともに）')
        }}
      </div>
      {{ $t('1回目の予約時、1回目接種の3週間後') }}
      <div class="bold">
        {{ $t('「同じ会場、同じ時間」') }}
      </div>
      <div class="margin-b">
        {{ $t('で2回目の予約をお取りします。') }}
      </div>
      <details>
        <summary class="bold border-a">
          {{
            $t(
              ' 新型コロナウイルスワクチン接種を希望する市民の方へ（ここをクリックして詳細を確認出来ます）'
            )
          }}
        </summary>
        <div class="fade">
          <p class="margin-ub-under">
            {{ $t('次回の予約受付について') }}
          </p>
          <table border="1" class="border">
            <tr>
              <th>
                {{ $t('予約受付開始日（受付開始時間：午前8時30分から）') }}
              </th>
              <th>{{ $t('予約対象者') }}</th>
              <th>{{ $t('実施方式') }}</th>
              <th>{{ $t('接種期間') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月15日（火曜日）') }}</th>
              <th>{{ $t('72歳以上の方') }}</th>
              <th>
                {{ $t('集団接種（臨時会場分）') }}
                <ul>
                  <li>
                  {{ $t('旧相模原協同病院') }}
                  </li>
                  <li>
                  {{ $t('グッディプレイス相模原3階（旧アイワールド相模原店）') }}
                  </li>
                </ul>
              </th>
              <th>{{ $t('6月21日（月曜日）～7月11日（日曜日）') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月15日（火曜日）') }}</th>
              <th>{{ $t('72歳以上の方') }}</th>
              <th>
                {{ $t('集団接種（臨時会場分）') }}
                <ul>
                  <li>
                  {{ $t('相模女子大学') }}
                  </li>
                </ul>
              </th>
              <th>{{ $t('6月26日（土曜日）、6月27日（日曜日）') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月17日（木曜日）') }}</th>
              <th>{{ $t('72歳以上の方') }}</th>
              <th>{{ $t('個別接種・集団接種') }}</th>
              <th>{{ $t('6月28日（月曜日）～7月4日（日曜日）') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月24日（木曜日）') }}</th>
              <th>{{ $t('65歳以上の方') }}</th>
              <th>{{ $t('個別接種・集団接種') }}</th>
              <th>{{ $t('7月5日（月曜日）～7月11日（日曜日）') }}</th>
            </tr>
          </table>
          <p class="margin-u">
            {{
              $t(
                '※個別接種、集団接種ともに、予約受付日によって医療機関や集団接種会場の接種日が異なります。'
              )
            }}
          </p>
          <p class="margin-b">
            {{ $t('以降の日程は新型コロナウイルスワクチンのページをご覧ください。') }}
          </p>
          <div class="margin-b">
            <ul>
              <li>
                <app-link
                  to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
                >
                  {{
                    $t(
                      '新型コロナウイルスワクチンについて （{VaccineDate}更新）',
                      {
                        VaccineDate: formatDate(VaccineDate),
                      }
                    )
                  }}
                </app-link>
              </li>
            </ul>
          </div>
          <p>
            {{
              $t(
                '※予約の受付が終了しましたら、ひばり放送、テレビ神奈川データ放送、さがみはらメールマガジン「防災メール」、エフエムさがみにおいてもお知らせします。'
              )
            }}
          </p>
          <span>{{ $t('（注）') }}</span>
          <ul class="Attention">
            <li class="margin-a">
              {{
                $t(
                  'ご予約の際は電話番号を今一度お確かめいただき、おかけ間違いには、十分ご注意ください。'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '予約開始当初は、専用コールセンターへの電話が集中するなど、予約が取りづらい状況になることが予想されますが、今後、ワクチンは安定的に供給される見込みとなっておりますので、ご安心ください。 供給量に応じて、予約可能数を順次拡大していきますので、慌てず、焦らず、お待ちくださいますようお願いいたします。'
                )
              }}
            </li>
            <li class="margin-b">
              {{
                $t(
                  '「病院や診療所」「市役所の窓口」では、予約を受け付けておりません。'
                )
              }}
            </li>
          </ul>
          <p>
            {{
              $t(
                'ワクチンに関するお問い合わせは、相模原市の担当窓口まで行ってください。当サイトでは、お答えできません。'
              )
            }}
          </p>
        </div>
      </details>
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
            to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/1023442.html"
          >
            {{
              $t(
                '国が設置する「大規模接種センター」で接種を希望される方へ （{VaccineDate}更新）',
                {
                  VaccineDate: formatDate(VaccineDate),
                }
              )
            }}
          </app-link>
        </li>
      </ul>
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
  VaccineDate: Date
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

  details[open] .fade {
    animation: fadeIn 0.7s ease;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  details[open] summary {
    color: gray;
    outline: none;
  }
}
</style>
