<template>
  <div class="VaccineInfo">
    <div class="VaccineInfo-heading">
      <h3 class="VaccineInfo-title">
        {{
          $t('ワクチンについて {Vaccinedate}更新', {
            Vaccinedate: formatDate(Vaccinedate),
          })
        }}
      </h3>
    </div>
    <div class="VaccineInfo-description">
      <div class="margin-b">
        <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
        >
          {{ $t('新型コロナウイルスワクチンについて') }}
        </app-link>
      </div>
      <div class="margin-b">
        <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
        <app-link to="https://jump.mrso.jp/141500/">
          {{
            $t(
              '相模原市ワクチン接種web予約【次回の受付：6月8日（集団接種・個別接種）】'
            )
          }}
        </app-link>
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
        <summary>
          {{
            $t(
              ' 新型コロナウイルスワクチン接種を希望する75歳以上の市民の方へ（ここをクリックして詳細を確認出来ます）'
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
              <th>{{ $t('実施方式') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月8日（火曜日）') }}</th>
              <th>{{ $t('個別接種・集団接種とも受付') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月10日（木曜日）') }}</th>
              <th>{{ $t('個別接種・集団接種とも受付') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月17日（木曜日）') }}</th>
              <th>{{ $t('個別接種・集団接種とも受付') }}</th>
            </tr>
            <tr>
              <th>{{ $t('6月24日（木曜日）') }}</th>
              <th>{{ $t('個別接種・集団接種とも受付') }}</th>
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
            {{ $t('※今後のスケジュールについても決定次第お知らせします。') }}
          </p>
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
                '詳細は、次のリンク「新型コロナウイルスワクチンについて」のページをご覧ください。'
              )
            }}
          </p>
          <div class="margin-b">
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
            >
              {{
                $t('ワクチンについて （{Vaccinedate}更新）', {
                  Vaccinedate: formatDate(Vaccinedate),
                })
              }}
            </app-link>
          </div>
          <p>
            {{
              $t(
                'ワクチンに関するお問い合わせは、相模原市の担当窓口まで行ってください。当サイトでは、お答えできません。'
              )
            }}
          </p>
        </div>
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import { InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus } from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  VaccineDate: Date
}
type Props = {}

export default Vue.extend<Methods, Computed, Props>({
  components: {
    AppLink,
  },
  computed: {
    VaccineDate() {
      return this.InfectionMedicalCareProvisionStatus['ワクチン更新日時']
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

  padding: 10px;
  margin-bottom: 20px;

  .VaccineInfo-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .VaccineInfo-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
      @include font-size(14);
    }
  }

  .VaccineInfo-description {
    padding: 12px;

    @include font-size(14);
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
  }
}
</style>
