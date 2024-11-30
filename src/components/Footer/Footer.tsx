import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="links">
                <a href="/privacy_policy">Privacy Policy</a>
                <span> • </span>
                <a href="/">Terms of use</a>
            </div>

            <span className="copyright">
                Copyright 2024 © Pairsona
            </span>
        </footer>
    );
}