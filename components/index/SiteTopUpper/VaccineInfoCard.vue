<template>
  <div class="VaccineInfo">
    <div class="VaccineInfo-heading">
      <h3 class="VaccineInfo-title">
        {{ $t('ワクチンについて') }} （{{ date }}更新）
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
            $t('相模原市ワクチン接種web予約【次回の受付：5月31日（個別接種）】')
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
          <p class="margin-ub">
            {{
              $t('5月24日（月曜日）から6月27日（日曜日）までの接種予約の受付')
            }}
          </p>
          <ul>
            <li>
              {{ $t('集団接種') }}
              <ul>
                <li class="margin-ub">
                  {{
                    $t(
                      '5月13日（木曜日）の受付は終了しました。※予約者数：10,260人'
                    )
                  }}
                </li>
                <li class="margin-ub">
                  {{
                    $t(
                      '5月27日（木曜日）の受付は終了しました。※予約者数：9,450人'
                    )
                  }}
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li class="margin-b">
              {{
                $t(
                  '個別接種：5月20日（木曜日）の受付は終了しました。※予約者数：14,151人'
                )
              }}
            </li>
          </ul>
          <p>
            {{
              $t(
                '※予約の受付が終了しましたら、ひばり放送、テレビ神奈川データ放送、さがみはらメールマガジン「防災メール」、エフエムさがみにおいてもお知らせします。'
              )
            }}
          </p>
          <ul>
            <li class="margin-ub">
              {{ $t('次回の予約受付について') }}
            </li>
            <p>
              {{
                $t('集団接種：現在、調整中のため、決まり次第お知らせします。')
              }}
            </p>
            <p class="margin-bb">
              {{
                $t(
                  '個別接種：5月31日（月曜日）午前8時30分から【6月7日（月曜日）から6月20日（日曜日）の接種】'
                )
              }}
            </p>
          </ul>
          <p>
            {{ $t('※今後のスケジュールについても決定次第お知らせします。') }}
          </p>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('5月29日（土曜日）に接種を受けられる方へ') }}
              <div class="margin-ab">
                {{
                  $t(
                    '5月29日（土曜日）は、ツアー・オブ・ジャパン相模原ステージ（国際自転車ロードレース）開催のため、午前8時30分から正午頃（予定）まで、コースおよび周辺道路は交通規制が実施されます。接種場所へ行かれる際は、交通規制がかかっている場合がありますので、ご注意ください。'
                  )
                }}
              </div>
            </li>
            <p>
              {{
                $t(
                  '交通規制に関する詳細は、次のページからご確認していただけます。'
                )
              }}
            </p>
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.city.sagamihara.kanagawa.jp/_res/projects/default_project/_page_/001/020/723/kisei.pdf"
            >
              {{ $t('交通規制のお知らせ') }}
            </app-link>
          </ul>
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
              {{ $t('新型コロナウイルスワクチンについて') }} （{{ date }}更新）
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
import { mdiChevronRight } from '@mdi/js'
import dayjs from 'dayjs'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'
import InfectionMedicalcareprovisionStatus from '@/data/infection_medicalcareprovision_status.json'

export default Vue.extend({
  components: {
    AppLink,
  },
  data() {
    return {
      mdiChevronRight,
      date: dayjs(InfectionMedicalcareprovisionStatus.vaccinedate).format(
        'YYYY年MM月DD日'
      ),
    }
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

  .Attention {
    color: red;
  }

  .bold {
    font-weight: bold;
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
