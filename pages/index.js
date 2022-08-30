import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Faq from "../components/Faq";

export default function Home() {
    return (
        <div className={styles.container + ' bg-fdark-500 text-white'}>
            <Head>
                <title>FAQ du climat</title>
                <meta name="description" content="Les réponses à tes questionnements sur le climat" />
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/page-facing-up_1f4c4.png" />
                <link href="https://api.fontshare.com/css?f[]=general-sans@500,600,700&amp;display=swap" rel="stylesheet"/>
            </Head>

            <main className={styles.main}>
                <header className={"text-center pt-8 xl:pt-10 pb-40"}>
                    <img className={"img-logo inline-block"} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/magnifying-glass-tilted-left_1f50d.png" alt="logo"/>
                    <h1 className="text-2xl mt-8 md:text-6xl font-semibold">
                        FAQ du climat
                    </h1>
                    <p className={"mt-7 text-center text-white text-lg"}>Les réponses à tes questions sur le climat</p>
                    <div className={"rounded-bottom-corner"} dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1680 40"\n' +
                            '                 className="position-absolute width-full z-1" style="bottom: -1px;">\n' +
                            '                <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#121826"></path>\n' +
                            '            </svg>'}}></div>
                </header>
                <Faq/>
            </main>

            <footer className={styles.footer}>
                <div className={"flex"}>Made with ❤ by <a className={"ml-2 hover:text-blue-100"} target="_blank" rel="noopener noreferrer" href="https://github.com/alexandre-mace">alexandre-mace</a></div>
            </footer>
        </div>
    )
}
