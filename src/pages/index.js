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
          Rails Girls <br />
          Gathering <br />
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
    <li className={styles.intro}>Linda Liukas</li>
    <li className={styles.intro}>Yoko Harada</li>
  </ul>
</div>
<div className={styles.textCenter}>
  <h2>
  Special
  </h2>
  <p className={styles.intro}>
    Coming Soon
  </p>
  <p className={styles.specialDesc}>
  2022年はRails Girls Japan設立10周年の年！<br />
  お祝いのメッセージを募集しています。<br />
  #rgj10th（仮）をつけてTweetしてくださいね！<br />
  </p>
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
