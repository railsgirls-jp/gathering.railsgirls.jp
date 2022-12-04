import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Helmet } from "react-helmet"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { graphql } from "gatsby"
const IndexPage = () => (
  <Layout>
    <Seo title="Rails Girls Gathering Japan 2022" />
    <Helmet>
    </Helmet>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/img_top_main.svg"
        loading="eager"
        width={280}
        quality={95}
        formats={["auto", "svg","webp", "avif",]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
      Rails Girls <br />
      Gathering <br />
      Japan 2022
      </h1>
      <div className={styles.date}>
        <p className={styles.intro}>
          <b>2022/12/03 (Sat) <br/>
          Online</b>{" "}
        </p>
      <a href="https://railsgirls.jp/code-of-conduct" target="_blank">Code of Conduct</a>
      </div>
    <div className={styles.news}>
      <p className={styles.textCenter}>
      <b>イベントは終了しました。<br />ご参加いただいた皆様、ありがとうございました！</b>
      </p>
    </div>
    </div>
    <div className={styles.textCenter}>
      <h2>
      Keynote
      </h2>
      <ul className={styles.intro}>
        <li className={styles.intro}><Link to="https://twitter.com/okuramasafumi" target="blank">大倉 雅史</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/yotii23" target="blank">鳥井 雪</Link></li>
      </ul>
    </div>
    <div className={styles.textCenter}>
    <h2>
    Timetable
    </h2>
      <table className={styles.timeTable}>
       <tr>
        <th>Time</th>
        <th>Description</th>
        </tr>
       <tr>
        <td>12:55</td>
        <td>開場</td>
       </tr>
       <tr>
        <td>13:00-13:10</td>
        <td>オープニング</td>
       </tr>
       <tr>
        <td>13:10-13:15</td>
        <td>スポンサーセッション<br />
          <Link to="https://www.st.inc/" target="_blank">STORES株式会社</Link></td>
       </tr>
       <tr>
        <td>13:15-13:45</td>
        <td>
          キーノート1<br />
          <Link to="https://speakerdeck.com/okuramasafumi/next-decade-of-rails-girls-and-the-community" class={styles.talkTitle}>Next decade of Rails Girls (and the community)</Link><br />
          <Link to="https://twitter.com/okuramasafumi" target="blank">大倉 雅史</Link>
        </td>
       </tr>
       <tr>
        <td>13:45-13:55</td>
        <td>休憩<br /></td>
       </tr>
       <tr>
        <td>13:55-14:30</td>
        <td>Lightning Talks<br />
          <div class={styles.lightningTalk}>
            <Link to="https://speakerdeck.com/maimux2x/railsgirlsgatheringjapan2022" class={styles.talkTitle}>コードを書くことが怖かった自分が本気でプログラミングを勉強して変わったこと</Link><br />
            <Link to="https://twitter.com/maimux2x" target="blank">牟田 真以</Link>
          </div>
          <div class={styles.lightningTalk}>
            <Link to="https://speakerdeck.com/harunatsujita/rails-girls-2022-lt" target="_blank"  class={styles.talkTitle}>異業種転職するときに女性として心配に感じていたこと</Link><br />
            <Link to="https://twitter.com/haruna_tsujita" target="blank">Tsujita Haruna</Link>
          </div>
          <div class={styles.lightningTalk}>
            <span class={styles.talkTitle}>デザイナーなりの Rails Girls</span><br />
            <Link to="https://twitter.com/murokaco" target="blank">室 和子</Link>
          </div>
          <div class={styles.lightningTalk}>
            <Link to="https://speakerdeck.com/emorima/koronahuo-derails-girlswokai-cui-sitaohua" class={styles.talkTitle}>コロナ禍でRails Girlsを開催したお話</Link><br />
            <Link to="https://twitter.com/emorima" target="blank">江森 真由美</Link>
          </div>
          <div class={styles.lightningTalk}>
            <Link to="https://speakerdeck.com/thatblue/invitation-to-competition-programming" class={styles.talkTitle}>競技プログラミングへのお誘い～私と競プロ友達になってください</Link><br />
            <Link to="https://twitter.com/thatblue_plus" target="blank">今野 夕貴</Link>
          </div>
          <div class={styles.lightningTalk}>
            <Link to="https://www.slideshare.net/hsbt/railsgirls-254696400" class={styles.talkTitle}>Rails Girls から始めるエンジニアリングの世界</Link><br />
            <Link to="https://twitter.com/hsbt" target="blank">Hiroshi SHIBATA</Link>
          </div>
        </td>
       </tr>
       <tr>
        <td>14:30-14:45</td>
        <td>休憩</td>
       </tr>
       <tr>
        <td>14:45-14:50</td>
         <td>スポンサーセッション<br />
           <Link to="https://pepabo.com/" target="_blank">GMOペパボ株式会社</Link></td>
       </tr>
       <tr>
        <td>14:50-15:20</td>
        <td>
          キーノート2<br />
          <Link to="https://speakerdeck.com/yotii23/10nian-qian-norails-girls-japanmukasibanasitowatasi-number-rggjp-number-rgjp10th" target="_blank"  class={styles.talkTitle}>
            10年前のRails Girls Japan むかしばなし と わたし<br />
          </Link>
          <Link to="https://twitter.com/yotii23" target="blank">鳥井 雪</Link>
        </td>
       </tr>
       <tr>
        <td>15:20-15:30</td>
        <td>クロージング</td>
       </tr>
      </table>
      <p className={styles.tableDesc}>
      ※ スケジュールは変更になる可能性があります。<br />
      ※ 本編終了後には懇親会も予定していますので、ご都合のつく方はぜひご参加ください。詳細は決まり次第ご案内いたします。<br />
      </p>
    </div>
    <div className={styles.textCenter}>
      <h2>
      Sponsor
      </h2>
      <h3>
      2022年 年間スポンサー
      </h3>
      <ul>
        <li className={styles.sponsorLogo}>
          <Link to="https://www.st.inc/" target="blank">
            <StaticImage
              src="../images/sponsor/stores.png"
              loading="eager"
              width={280}
              quality={95}
              formats={["auto", "svg","webp", "avif",]}
              alt="STORES株式会社ロゴ"
              className="sponsorLogoImage"
            />
          </Link>
          <caption>
            <Link to="https://www.st.inc/" target="blank">STORES株式会社</Link>
          </caption>
        </li>
        <li className={styles.sponsorLogo}>
          <Link to="https://corp.timee.co.jp/" target="blank">
            <StaticImage
              src="../images/sponsor/timee.png"
              loading="eager"
              width={280}
              quality={95}
              formats={["auto", "svg","webp", "avif",]}
              alt="株式会社タイミーロゴ"
            />
          </Link>
          <caption>
            <Link to="https://corp.timee.co.jp/" target="blank">株式会社タイミー</Link>
          </caption>
        </li>
        <li className={styles.sponsorLogo}>
          <Link to="https://xalpha.jp/" target="blank">
            <StaticImage
              src="../images/sponsor/xalpha.png"
              loading="eager"
              width={280}
              quality={95}
              formats={["auto", "svg","webp", "avif",]}
              alt="株式会社ザルファロゴ"
            />
          </Link>
          <caption>
            <Link to="https://xalpha.jp/" target="blank">株式会社ザルファ</Link>
          </caption>
        </li>
      </ul>
      <h3>
      イベントスポンサー
      </h3>
      <ul>
        <li className={styles.sponsorLogo}>
          <Link to="https://pepabo.com/" target="blank">
            <StaticImage
              src="../images/sponsor/pepabo.png"
              loading="eager"
              width={280}
              quality={95}
              formats={["auto", "svg","webp", "avif",]}
              alt="GMOペパボ株式会社ロゴ"
              imgClassName="sponsorLogoImage"
            />
          </Link>
          <caption>
            <Link to="https://pepabo.com/" target="blank">GMOペパボ株式会社</Link>
          </caption>
        </li>
      </ul>
    </div>
    <div className={styles.textCenter}>
      <h2>
      Special
      </h2>
      <p className={styles.specialDesc}>
      2022年は日本で最初のRails Girlsイベントが開催されて10周年！<br />
      10周年を記念してメッセージを募集しています。<br />
      Rails Girlsの思い出・意気込み(野望)・期待など、
      <b>#rgjp10th</b>をつけてツイートしてくださいね！<br />
      </p>
      <Link to="https://twitter.com/intent/tweet?hashtags=rgjp10th" target="_blank" className={styles.primaryButtonLarge}
      data-show-count="false">
      ツイートする</Link> <br />
      <Link to="/10th" className={styles.primaryButtonLarge}
            data-show-count="false">
        特設ページを見る</Link>
    </div>
    <div className={styles.textCenter}>
      <h2>
      Shop
      </h2>
      <p className={styles.specialDesc}>
      SUZURIでRails Girls Gathering Japan 2022と10周年記念のグッズを販売中!
      <br />
      </p>
      <Link to="https://suzuri.jp/railsgirls-jp" target="_blank" className={styles.primaryButtonLarge}
      data-show-count="false">
      グッズを見る</Link> <br />
    </div>
    <div className={styles.textCenter}>
      <h2>
      Team
      </h2>
      <ul className={styles.intro}>
        <li className={styles.intro}><Link to="https://twitter.com/emorima" target="blank">emorima</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/co_bachie" target="blank">cobachie</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/yadaita" target="blank">yadaita</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/siroemk" target="blank">siroemk</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/thatblue_plus" target="blank">thatblue</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/ai_24_ai" target="blank">ai-24</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/Saki_ht3150" target="blank">Saki</Link></li>
        <li className={styles.intro}><Link to="https://twitter.com/atttsumi" target="blank">attsumi</Link></li>
        <li className={styles.intro}><Link to="https://railsgirls.jp/about" target="blank">Rails Girls Japan</Link></li>
      </ul>
    </div>
  </Layout>
)
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Rails Girls Gathering Japan 2022" />

export default IndexPage
