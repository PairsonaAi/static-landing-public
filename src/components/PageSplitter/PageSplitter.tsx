import "./PageSplitter.css";

import HeaderLine from "../HeaderLine/HeaderLine";

type Props = {
    title: string;
    imageURL: string;
    children: JSX.Element;
}

export default function PageSplitter({ title, imageURL, children }: Props) {
    return (
        <div className="page-splitter">
            <div className="page-splitter__top-line">
                <HeaderLine text={title} />
            </div>

            <div className="page-splitter__bottom-block">
                <div className="page-splitter__content">
                    {children}
                </div>

                <img className="page-splitter__image" src={imageURL} alt="Model example" />
            </div>
        </div>
    );
}