<template>
  <div class="VaccineInfo">
    <div class="VaccineInfo-heading">
      <h3 class="VaccineInfo-title">
        {{ $t('ワクチンについて') }} （{{ date }}更新）
      </h3>
    </div>
    <div class="VaccineInfo-description">
      <details>
        <summary>
          {{
            $t(
              ' 新型コロナウイルスワクチン接種を希望する75歳以上の市民の方へ（ここをクリックして詳細を確認出来ます）'
            )
          }}
        </summary>
        <div class="fade">
          <ul>
            <li>
              {{
                $t('5月24日（月曜日）から6月6日（日曜日）までの接種予約の受付')
              }}
            </li>
          </ul>
          <br />
          <p class="Attention">
            {{
              $t('集団接種：5月13日の受付は終了しました。※予約者数：10,260人')
            }}
          </p>
          <p class="Attention-bold">
            {{
              $t(
                '個別接種：5月20日（木曜日）午前8時30分から受付【予約受付可能者数：約13,900人（5月18日時点）】'
              )
            }}
          </p>
          <p>
            {{
              $t(
                '※予約の受付が終了しましたら、ひばり放送、テレビ神奈川データ放送、さがみはらメールマガジン「防災メール」、エフエムさがみにおいてもお知らせします。'
              )
            }}
          </p>
          <ul>
            <li>
              {{
                $t(
                  '次回の予約受付について（6月7日（月曜日）以降の接種予約の受付）'
                )
              }}
            </li>
          </ul>
          <br />
          <p>
            {{ $t('集団接種：5月27日（木曜日）午前8時30分から') }}
          </p>
          <p>
            {{ $t('個別接種：5月31日（月曜日）午前8時30分から') }}
          </p>
          <br />
          <p>
            {{
              $t(
                '2回目の予約方法が変更になりました（集団接種・個別接種ともに）1回目の接種後、会場で1回目接種の3週間後の同じ会場、同じ時間で2回目の予約をご案内します。1回目接種後に2回目の予約は不要となりました。'
              )
            }}
          </p>
          <br />
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('5月29日（土曜日）に接種を受けられる方へ'
               ) }}
            <br />
              {{ $t('5月29日（土曜日）は、ツアー・オブ・ジャパン相模原ステージ（国際自転車ロードレース）開催のため、午前8時30分から正午頃（予定）まで、コースおよび周辺道路は交通規制が実施されます。接種場所へ行かれる際は、交通規制がかかっている場合がありますので、ご注意ください。'
               ) }}
            </li>
          </ul>
          <br />
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
          <ul class="Attention">
          <br />
            <li>
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
            <li>
              {{
                $t(
                  '「病院や診療所」「市役所の窓口」では、予約を受け付けておりません。'
                )
              }}
            </li>
          </ul>
          <br />
          <p>
            {{
              $t(
                '詳細は、次のリンク「新型コロナウイルスワクチンについて」のページをご覧ください。'
              )
            }}
          </p>
          <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
          <app-link
            to="https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html"
          >
            {{ $t('新型コロナウイルスワクチンについて') }} （{{ date }}更新）
          </app-link>
          <br />
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

  .Attention {
    color: red;
  }

  .bold {
    font-weight: bold;
  }

  .Attention-bold {
    color: red;
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
