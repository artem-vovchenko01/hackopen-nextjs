import Image from 'next/image'
import styles from '/styles/landing.module.css'

export default function ContentBlock( { left, mainText, pText, image }) {
    let imgStyles = styles.contentBlockImg + ' ';
    let textContentStyles = styles.textContent + ' ';
    if (left === true) {
      imgStyles += styles.imageOnLeftImg;
      textContentStyles += styles.imageOnLeftTextContent;
    }

    return (
      <div className={styles.contentBlock}>
        <div className={textContentStyles}>
          <h2>
            {mainText}
          </h2>
          <p>
            {pText}
          </p>
        </div>
        <Image className={imgStyles} src={image} height={400} width={603} />
      </div>
    );
}
