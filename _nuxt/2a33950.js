(window.webpackJsonp=window.webpackJsonp||[]).push([[64,52,53],{418:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("140e3200",content,!0,{sourceMap:!1})},424:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0ade608e",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n(418)},438:function(t,e,n){var o=n(30)(!1);o.push([t.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=o},445:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(134),r=o.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(c.c)(t)}}}),d=(n(437),n(10)),l=n(62),f=n.n(l),m=n(361),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);e.default=component.exports;f()(component,{VIcon:m.a})},446:function(t,e,n){"use strict";n(424)},447:function(t,e,n){var o=n(30)(!1);o.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #085c6c}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=o},451:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend(),c=(n(446),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},624:function(t,e,n){var content=n(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("23a76d33",content,!0,{sourceMap:!1})},698:function(t){t.exports=JSON.parse('[{"path":"/cards/details-of-confirmed-cases","title":"検査陽性者の状況","category":"感染動向","ogpWidth":959,"ogpHeight":500},{"path":"/cards/monitoring-items-overview","title":"モニタリング状況","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/number-of-confirmed-cases","title":"報告日別による陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":500},{"path":"/cards/monitoring-number-of-confirmed-cases","title":"新規陽性者数","category":"感染動向","ogpWidth":959,"ogpHeight":500},{"path":"/cards/number-of-confirmed-cases-by-municipalities","title":"陽性者数（区別・週報）","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/deaths-by-death-date","title":"死亡日別による死亡者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/positive-number-by-diagnosed-date","title":"確定日別による陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/positive-number-by-developed-date","title":"発症日別による陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/number-of-confirmed-cases-by-age","title":"年代別の陽性者数","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/tested-number","title":"検査数の状況","category":"感染動向","ogpWidth":959,"ogpHeight":570},{"path":"/cards/vaccine-info","title":"新型コロナウイルスワクチン接種者数","category":"ワクチン接種状況","ogpWidth":959,"ogpHeight":570},{"path":"/cards/vaccination","title":"ワクチン接種件数（高齢者・累計）","category":"ワクチン接種状況","ogpWidth":959,"ogpHeight":570}]')},699:function(t,e,n){"use strict";n(624)},700:function(t,e,n){var o=n(30)(!1);o.push([t.i,".Sitemap-titleLink[data-v-bcc45c78]{display:flex;color:#085c6c}.Sitemap-titleLink[data-v-bcc45c78]  .v-icon{color:#085c6c}.Sitemap-titleLink svg[data-v-bcc45c78]{fill:#085c6c}.Sitemap-list[data-v-bcc45c78]{list-style:none}.Sitemap-item[data-v-bcc45c78]{display:inline-block;margin:0 12px 12px 0}.Sitemap-linkButton[data-v-bcc45c78]{padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #085c6c;color:#085c6c;cursor:pointer}.Sitemap-linkButton[data-v-bcc45c78]:hover{background-color:#085c6c;color:#fff}.Sitemap-linkButton:hover>i[data-v-bcc45c78]{color:#fff!important}.Sitemap-linkButton[data-v-bcc45c78]:hover{text-decoration:none}",""]),t.exports=o},864:function(t,e,n){"use strict";n.r(e);n(26);var o=n(54),c=n(0),r=n(698),d=n(85),l=n(445),f=n(451),m=c.default.extend({components:{PageHeader:l.default,StaticCard:f.default,AppLink:d.default},data:function(){return{mdiChartTimelineVariant:o.c,mdiDomain:o.h,cardData:r}},head:function(){return{title:this.$t("サイトマップ")}},methods:{getCardRoutes:function(t){return this.cardData.filter((function(e){return e.category===t}))}}}),h=(n(699),n(10)),v=n(62),_=n.n(v),x=n(361),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Worker"},[n("page-header",{attrs:{title:t.$t("サイトマップ")}}),t._v(" "),n("static-card",[n("h3",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/")}},[n("v-icon",{staticClass:"mr-2"},[t._v("\n          "+t._s(t.mdiChartTimelineVariant)+"\n        ")]),t._v("\n        "+t._s(t.$t("市内の最新感染動向"))+"\n      ")],1)],1),t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("感染動向")))]),t._v(" "),n("ul",{staticClass:"Sitemap-list"},t._l(t.getCardRoutes("感染動向"),(function(e,i){return n("li",{key:"cards-monitoring"+i,staticClass:"Sitemap-item"},[n("app-link",{staticClass:"Sitemap-linkButton",attrs:{to:t.localePath(e.path)}},[t._v("\n            "+t._s(t.$t(e.title))+"\n          ")])],1)})),0)]),t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("ワクチン接種状況")))]),t._v(" "),n("ul",{staticClass:"Sitemap-list"},t._l(t.getCardRoutes("ワクチン接種状況"),(function(e,i){return n("li",{key:"cards-reference"+i,staticClass:"Sitemap-item"},[n("app-link",{staticClass:"Sitemap-linkButton",attrs:{to:t.localePath(e.path)}},[t._v("\n            "+t._s(t.$t(e.title))+"\n          ")])],1)})),0)])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/worker")}},[n("v-icon",{staticClass:"mr-2"},[t._v("\n          "+t._s(t.mdiDomain)+"\n        ")]),t._v("\n        "+t._s(t.$t("企業の皆様・はたらく皆様へ"))+"\n      ")],1)],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("事業者の皆様に対する支援情報およびテレワークの推進について"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/about")}},[t._v("\n        "+t._s(t.$t("当サイトについて"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("サイトの目的、アクセシビリティ方針、ブラウザ環境など"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/contacts")}},[t._v("\n        "+t._s(t.$t("お問い合わせ先一覧"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("お問い合わせ内容別対応局名、電話番号とお問い合わせ対応時間など"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/data")}},[t._v("\n        "+t._s(t.$t("数値の入力ミスに関するお知らせ"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイト内における数値の入力ミスについて"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("過去の報告"))+"\n      ")]),t._v(" "),n("ul",[n("li",[n("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/info/0721")}},[t._v("\n            "+t._s(t.$t("2021年7月21日発表分"))+"\n          ")])],1)])])])],1)}),[],!1,null,"bcc45c78",null);e.default=component.exports;_()(component,{VIcon:x.a})}}]);