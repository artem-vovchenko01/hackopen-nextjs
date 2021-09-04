import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '/styles/landing.module.css'
import homeStyles from '/styles/Home.module.css'
import ContentBlock from '../components/contentBlock'

const pTexts = [
    "You can join us offline in San Francisco or online using video, voice and chat communication. You need to be registered in both cases. ",
    "You’ll work on challenges collaboratively and present projects as a team. If you don’t have one, don’t worry, you can still apply, and you’ll be assigned to other free students.",
    "You’ll build projects under open source licenses which will be hosted for public use. The requirement of this hackathon is to use only FOSS development tools and operating systems.",
    "Apart from praises of the global open source community, the best performing teams will receive 5000$+ in rewards. The best projects will be funded by our investors and get necessary promotion for further growth. 50+ projects already received funding, many of them became successful businesses.",
];

const hTexts = [
    "Participate in the hackathon with 100+ like-minded individuals",
    "Teams with up to 5 members can be registered",
    "Take your chance to make open source ecosystem shine and benefit global community",
    "Your effort pays off",
];

export default function Landing() {
  return (
      <Layout title='Hackopen'>
      <div>
        <h1 class={styles.landingH1}>
          Here we build open source software to empower the future
        </h1>

        <div className={styles.contentWrapper}>

        {/* <div>
            <div className={styles.textContent}>
            <h2>
                {hTexts[0]}
            </h2>
            <p>
                {pTexts[0]}
            </p>
            </div>
            <Image src="/images/community.png" height={400} width={603} />
        </div> */}

        <ContentBlock left={false} pText={pTexts[0]} mainText={hTexts[0]} image='/images/community.png'>
        </ContentBlock>

        <ContentBlock left={true} pText={pTexts[1]} mainText={hTexts[1]} image='/images/team.png'>
        </ContentBlock>

        <ContentBlock left={false} pText={pTexts[2]} mainText={hTexts[2]} image='/images/FOSS.png'>
        </ContentBlock>

        <ContentBlock left={true} pText={pTexts[3]} mainText={hTexts[3]} image='/images/investors.png'>
        </ContentBlock>

        {/* <div className={styles.imageOnLeft}>
            <div className={styles.textContent}>
            <h2>
                {hTexts[1]}
            </h2>
            <p>
                {pTexts[1]}
            </p>
            </div>
            <Image src="/images/team.png" height={400} width={603} />
        </div> */}

        {/* <div>
            <div className={styles.textContent}>
            <h2>
                {hTexts[2]}
            </h2>
            <p>
                {pTexts[2]}
            </p>
            </div>
            <Image src="/images/FOSS.png" height={400} width={603} />
        </div> */}

        {/* <div className={styles.imageOnLeft}>
            <div className={styles.textContent}>
            <h2>
                {hTexts[3]}
            </h2>
            <p>
                {pTexts[3]}
            </p>
            </div>
            <Image src="/images/investors.png" height={400} width={603} />
        </div> */}

        </div>
      </div>
      </Layout>
  )
}