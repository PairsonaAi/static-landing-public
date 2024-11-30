import "./PointerDown.css";

import Arrow from "../../assets/svg/Arrow";

type Props = {
    children: JSX.Element;
}

export default function PointerDown({ children }: Props) {
    return (
        <div className="pointer-down">
            <span className="pointer-down__text">
                {children}
            </span>

            <div className="pointer-down__arrow">
                <Arrow />
            </div>
        </div>
    );
}