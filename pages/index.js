import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Faq from "../components/Faq";

export default function Home() {
    return (
        <div className={styles.container + ' bg-fpurple-500 text-fyellow-500 px-4 md:px-6'}>
            <Head>
                <title>FAQ du climat</title>
                <meta name="description" content="Les réponses à tes questionnements sur le climat" />
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/page-facing-up_1f4c4.png" />
            </Head>

            <main className={styles.main}>
                <h1 className="text-4xl md:text-6xl font-bold">
                    Faq du climat
                </h1>
                <p className={"mt-6 text-center text-fdark-200 text-lg"}>Les réponses à tes questionnements sur le climat</p>
                <Faq/>
            </main>

            <footer className={styles.footer}>
                <div className={"flex"}>Made with ❤ by <a className={"ml-2 hover:text-blue-100"} target="_blank" rel="noopener noreferrer" href="https://github.com/alexandre-mace">alexandre-mace</a></div>
            </footer>
        </div>
    )
}
