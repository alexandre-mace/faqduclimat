import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Faq from "./components/Faq";
import questions from "./data/questions";

export default function Home() {
    return (
        <div className={styles.container + ' bg-fpurple-500 text-fyellow-500'}>
            <Head>
                <title>FAQ du climat</title>
                <meta name="description" content="La FAQ du climat avec les réponses aux questions de ton oncle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className="text-4xl md:text-6xl font-bold">
                    Faq du climat
                </h1>
                <p className={"mt-4 text-center"}>Les meilleurs réponses à ton oncle climatosceptique 📝</p>
                <Faq questions={questions}/>
            </main>

            <footer className={styles.footer}>
                <div className={"flex"}>Made with ❤ by <a className={"ml-2"} target="_blank" rel="noopener noreferrer" href="https://github.com/alexandre-mace">alexandre-mace</a></div>
            </footer>
        </div>
    )
}
