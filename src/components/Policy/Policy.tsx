import "./Policy.css";

type Props = {
    title: string;
    children: JSX.Element;
}

export function PrivacyPolicy() {
    return (
        <Policy title="Pairsona Privacy Policy">
            <>
                1. Introduction
                This Privacy Policy explains how Pairsona.... 
            </>
        </Policy>
    );
}

function Policy({ title, children }: Props) {
    return (
        <main className="policy">
            <h1 className="policy__title">{title}</h1>

            <div className="text">
                {children}
            </div>
        </main>
    );
}