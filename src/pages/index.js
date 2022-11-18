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
      <b>イベント参加申し込みを開始しました！</b>
      </p>
      <Link to="https://railsgirls-japan.doorkeeper.jp/events/146236" target="_blank" className={styles.primaryButtonLarge}>
      申し込む（無料）</Link>
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
  Special
  </h2>
  <p className={styles.specialDesc}>
  2022年は日本で最初のRails Girlsイベントが開催されて10周年！<br />
  10周年を記念してメッセージを募集しています。<br />
  Rails Girlsの思い出・意気込み（野望）・期待など、
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
