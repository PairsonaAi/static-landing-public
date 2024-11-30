import "./Slider.css";

type Props = {
    children: JSX.Element | JSX.Element[];
    finisherText?: string;
}

// type FinisherProps = {
//     text: string;
// }

// function Finisher({ text }: FinisherProps) {
//     return (
//         <div className="slider-finisher">
//             <span className="slider-finisher__text">{text}</span>
//         </div>
//     );
// }

export default function Slider({ children, finisherText }: Props) {
    children = Array.isArray(children) ? children : [children];

    return (
        <div className="slider">
            {children.map((child, i) => (<div className="slider__block" key={i}>{child}</div>))}
            {/* {finisherText && <Finisher text={finisherText} />} */}
        </div>
    );
}