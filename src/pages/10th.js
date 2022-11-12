import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import app from 'gatsby-plugin-firebase-v9.0'
import { getDatabase, ref, query, get, orderByKey, limitToLast, endBefore } from 'firebase/database'
import { Link } from "gatsby";

const LOAD_COUNT = 3;
const database = getDatabase(app);

const AnivPage = () => {
  const [tweetURLs, setURLs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [hasMoreTweets, setHasMoreTweets] = useState(true);

  useEffect(() => {
    get(query(ref(database, 'tweets'), limitToLast(LOAD_COUNT))).then((snapshot) => {
      const result = snapshot.val();
      const urls = [];
      let nextIndex = currentIndex;
      Object.keys(result).forEach((key) => {
        console.log('current key', { key });
        urls.unshift(result[key]);
        if (nextIndex === -1) {
          nextIndex = parseInt(key);
        } else {
          nextIndex = Math.min(parseInt(key), nextIndex);
        }
      });

      setCurrentIndex(nextIndex);
      console.log('current index', { currentIndex });
      if (nextIndex === 0) {
        setHasMoreTweets(false);
      }

      console.log('tweet urls', { urls });
      const appendURLs = tweetURLs.concat(urls);
      setURLs(appendURLs);
    });
  }, []);

  useEffect(() => {
    console.log('reloaded twitter widget script');
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    return () => {
      console.log('removed twitter widget script');
      document.body.removeChild(script);
    };
  }, [tweetURLs]);

  const loadNewTweets = () => {
    console.log('current index', { currentIndex });
    get(query(ref(database, 'tweets'), orderByKey(), limitToLast(LOAD_COUNT), endBefore(currentIndex.toString(10)))).then((snapshot) => {
      const result = snapshot.val();
      console.log('query result', { result });

      const urls = [];
      let nextIndex = currentIndex;
      Object.keys(result).forEach((key) => {
        urls.unshift(result[key]);
        nextIndex = Math.min(parseInt(key), nextIndex);
      });

      setCurrentIndex(nextIndex);
      console.log('current index', { currentIndex });
      if (nextIndex === 0) {
        setHasMoreTweets(false);
      }

      console.log('tweet urls', { urls });
      const appendURLs = tweetURLs.concat(urls);
      setURLs(appendURLs);
    });
  };

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
              <p lang="ja" dir="ltr"></p><a href={ tweetURL }></a>
            </blockquote>
            </div>
          ))
        }
        { hasMoreTweets ? <button
          className={styles.primaryButtonLarge}
          data-show-count="false"
          onClick={loadNewTweets}>もっとツイートを見る</button> : <Link
          to="https://twitter.com/intent/tweet?hashtags=rgjp10th"
          target="_blank"
          className={styles.primaryButtonLarge}
          data-show-count="false">ツイートする</Link>}
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
