import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import app from 'gatsby-plugin-firebase-v9.0'
import { getDatabase, ref, child, get } from 'firebase/database'

const database = getDatabase(app);

const AnivPage = () => {
  const [tweetURLs, setURLs] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database);
    get(child(databaseRef, 'tweets')).then((snapshot) => {
      console.log('tweet urls', { urls: snapshot.val() });
      const appendURLs = tweetURLs.concat(snapshot.val());
      setURLs(appendURLs);
    });
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [tweetURLs]);

  return (
    <Layout>
      <Seo title="Rails Girls Gathering Japan 2022" />
      <div className={styles.textCenter}>
        <h1>
          Rails Girls イベント<br />
          10周年記念
        </h1>
        <h2>
          Tweets
        </h2>
        {
          tweetURLs.map((tweetURL, index) => (
            <div className={styles.tweet} key={index}>
            <blockquote className="twitter-tweet" data-conversation="none">
              <p lang="ja" dir="ltr">tweet</p>
              account
              <a href={ tweetURL }>tweeted at</a>
            </blockquote>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Rails Girls Gathering Japan 2022" />

export default AnivPage
