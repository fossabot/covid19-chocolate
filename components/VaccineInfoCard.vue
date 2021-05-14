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
              {{ $t('予約受付開始日時') }}
            </li>
          </ul>
          <br />
          <p class="Attention">
            {{
              $t(
                '集団接種：【予約受付終了】令和3年5月13日（木曜日）午前8時30分から'
              )
            }}
          </p>
          <p>
            {{
              $t(
                '※5月16日（日曜日）から6月6日（日曜日）までの接種についての予約を受付いたします。'
              )
            }}
          </p>
          <p class="Attention">
            {{ $t('個別接種：令和3年5月20日（木曜日）午前8時30分から') }}
          </p>
          <p>
            {{
              $t(
                '※5月24日（月曜日）から6月6日（日曜日）までの接種についての予約を受付いたします。'
              )
            }}
          </p>
          <br />
          <ul>
            <li>
              {{ $t('次回の予約受付について') }}
            </li>
          </ul>
          <br />
          <p>
            {{
              $t(
                '6月7日（月曜日）以降の接種についての予約受付は、次のとおりとなります。'
              )
            }}
          </p>
          <p class="bold">
            {{ $t('集団接種の予約受付日時：5月27日（木曜日）午前8時30分から') }}
          </p>
          <p class="bold">
            {{ $t('個別接種の予約受付日時：5月31日（月曜日）午前8時30分から') }}
          </p>
          <br />
          <span>{{ $t('（注）') }}</span>
          <ul class="Attention">
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
