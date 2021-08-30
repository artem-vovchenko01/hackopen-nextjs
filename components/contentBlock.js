import Image from 'next/image'

export default function ContentBlock( { props }) {
    const divClasses = "conten-block" + props.divClass;
    return (
      <div className={props.divClasses}>
        <div className="text-content">
          <h2>
            {props.mainText}
          </h2>
          <p>
            {props.pText}
          </p>
        </div>
        <Image src={props.image} height={300} width={300} />
      </div>
    );
}
