import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
const IndexPage = () => (
  <Layout>
    <Seo title="Rails Girls Gathering Japan 2022" />
    <Helmet>
      <meta property="og:url" content="https://gathering.railsgirls.jp/" data-react-helmet="true" />
      <meta property="og:title" content="Rails Girls Gathering Japan 2022" data-react-helmet="true" />
      <meta property="og:description" content="12/3 オンラインにて Rails Girls Gathering Japan 2022 を開催します！" data-react-helmet="true" />
      <meta property="og:image" content="../images/ogimage.png" data-react-helmet="true" />
      <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
      <meta name="twitter:creator" content="railsgirlsjapan" data-react-helmet="true" />
      <meta name="twitter:title" content="Rails Girls Gathering Japan 2022" data-react-helmet="true" />
      <meta name="twitter:description" content="12/3 オンラインにて Rails Girls Gathering Japan 2022 を開催します！" data-react-helmet="true" />
      <meta name="twitter:image" content="../images/ogimage.png" data-react-helmet="true" />
    </Helmet>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/img_top_main.svg"
        loading="eager"
        width={280}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
      Rails Girls <br />
      Gathering <br />
      Japan 2022
      </h1>
      <p className={styles.intro}>
        <b>2022/12/03 (Sat) Online</b>{" "}
      </p>
      <a href="https://railsgirls.jp/code-of-conduct" target="_blank">Code of Conduct</a>
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
