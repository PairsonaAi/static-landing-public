import "./ReleaseSection.css";

import PageSplitter from "../PageSplitter/PageSplitter";
import BenefitBlock from "../BenefitBlock/BenefitBlock";
import Footer from "../Footer/Footer";

export default function ReleaseSection() {
    return (
        <section className="page release-page desktop">
            <PageSplitter
                title="Soon to come"
                imageURL={require('../../assets/images/page_4.png')}
            >
                <>
                    <h2 className="page-splitter__header">Date: to be announced</h2>
                    <p className="page-splitter__text">Your participation in the pre-release programme will help a lot in the development of the project, but in exchange you will get a lot of goodies:</p>

                    <div className="benefits-section">
                        <BenefitBlock>
                            <>Lifetime discount on content<br />creation subscriptions</>
                        </BenefitBlock>

                        <BenefitBlock>
                            <>Early access to all updates<br />and new features</>
                        </BenefitBlock>

                        <BenefitBlock>
                            <>Of course, you'll be one of the first to create<br />your character before the official release date</>
                        </BenefitBlock>

                        <BenefitBlock>
                            <>And all<br />our love</>
                        </BenefitBlock>
                    </div>

                    <p className="page-splitter__text">We would appreciate any support on social media or if you just tell your friends about us. To make sure you don't miss the Pre-Release and stay up to date with our news, consider signing up for our newsletter.</p>
                </>
            </PageSplitter>

            <Footer />
        </section>
    );
}