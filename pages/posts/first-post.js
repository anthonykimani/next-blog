import Link from 'next/link';
import styles from '/styles/Home.module.css';
import Head from 'next/head';

export default function FirstPost(){
    return <div className={styles.container}>
    <Head>
        <title>First Post</title>
    </Head>
    <h1 className={styles.title}>First Post</h1>
    <h2 className={styles.description}><Link href="/">Back to home</Link></h2>
    </div>
}