import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import pageStyles from '@/styles/Page.module.css'
function HomePage() {
    return (
        <>
            <Head>
                <title>My First Page</title>
            </Head>

 <main className={styles.main} >
<div className={pageStyles.card1}>
  <Image src='/zoro1.jpg' alt='/zoro1.jpg' height={50} width={50} />
  <h1 >Aryan Agarwal</h1>

  <p  className={pageStyles.title1}>Software Developer @GlueLabs</p>

  <p className={pageStyles.title2}>Chitkara University</p>

  <p ><button className={pageStyles.button1} >Contact</button></p>

</div>

 </main>
         </>
    )
}

export default HomePage;