import "./BenefitBlock.css";

type Props = {
    children: JSX.Element;
}

export default function BenefitBlock({ children }: Props) {
    return (
        <div className="benefits-section__block">
            <span className="benefits-section__text">
                {children}
            </span>
        </div>
    );
}