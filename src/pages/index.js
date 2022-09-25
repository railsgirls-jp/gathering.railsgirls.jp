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
      <div className={styles.textCenter}>
        <div className={styles.title}>
          <h1>
          Rails Girls<br />
          Gathering<br />
          Japan 2022
          </h1>
        </div>
        <div className={styles.date}>
          <p className={styles.intro}>
            2022/12/03 (Sat) <br/>
            Online{" "}
          </p>
        </div>
        <div className={styles.textCenter}>
          <a href="https://railsgirls.jp/code-of-conduct" target="_blank">Code of Conduct</a>
        </div>
    </div>
    <div className={styles.textCenter}>
  <h2>
  Keynote
  </h2>
  <ul className={styles.intro}>
    <li className={styles.intro}>Coming Soon</li>
  </ul>
</div>
<div className={styles.textCenter}>
  <h2>
  Special
  </h2>
  <p className={styles.intro}>
  </p>
  <p className={styles.specialDesc}>
  2022年は日本で最初のRails Girlsイベントが開催されて10周年！<br />
  10周年を記念してメッセージを募集しています。<br />
  Rails Girlsの思い出・意気込み（野望）・期待など<br />
  #rgjp10thをつけてTweetしてくださいね！<br />
  </p>
  <p className={styles.specialDesc}>
  <a href="https://twitter.com/intent/tweet?button_hashtag=rgjp10th&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #rgjp10th</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </p>
</div>
<div className={styles.textCenter}>
  <h2>
  Team
  </h2>
  <ul className={styles.intro}>
    <li className={styles.intro}></li>
    <li className={styles.intro}>Yoko Harada</li>
  </ul>
</div>
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
