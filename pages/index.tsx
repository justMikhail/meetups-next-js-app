import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import {FeedBack} from '../components';
import PageLayout from '../layouts/layout';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Main Page &#9733; Meetups App  </title>
      </Head>
      <div className={styles.container}>
        <h1>Main Page</h1>
        <FeedBack />
      </div>
    </PageLayout>
  )
}

export default Home
