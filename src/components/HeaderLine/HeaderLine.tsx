import "./HeaderLine.css";

type Props = {
    text: string;
}

export default function HeaderLine({ text }: Props) {
    return (
        <div className="header-line">
            <h2 className="header-line__text">{text}</h2>
        </div>
    );
}