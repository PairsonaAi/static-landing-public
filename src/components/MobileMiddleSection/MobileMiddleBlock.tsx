import "./MobileMiddleSection.css";

import PointerDown from "../PointerDown/PointerDown";
import Slider from "../Slider/Slider";
import ModelSlide from "../ModelSlide/ModelSlide";
import BenefitBlock from "../BenefitBlock/BenefitBlock";
import Footer from "../Footer/Footer";

import { ModelSlideData } from "../ModelSlide/ModelSlide";

type Props = {
    slides: ModelSlideData[] | null
}

export default function MobileMiddleSection({ slides }: Props) {
    return (
        <section className="mobile-only">
            <p className="m-intro centered">Advances in AI technology are blurring the lines between the real world and the digital world. Pairsona invites you to be one of the first to cross this boundary. Create your own incredibly realistic character with us and it will bring you a share of AI glory</p>

            <PointerDown>
                <>How it<br />works?</>
            </PointerDown>

            <h2 className="m-header centered">Creation</h2>
            <p className="centered">Come up with your character's appearance, personality and distinctive features. Using the convenient constructor, transfer your ideas into a digital image. Create an account in your desired social networks and get an initial boost.</p>

            <img
                className="decoration-image centered"
                src={require('../../assets/images/amelia_roof.png')}
                alt="Model example"
            />

            <h2 className="m-header centered">Content-making</h2>
            <p className="centered">Use the app every time you want to generate an image for publishing. You can set any place, time, pose and even the emotion of the character. </p>

            <PointerDown>
                <>Our<br />characters</>
            </PointerDown>

            {slides && (
                <Slider
                    finisherText="more to come"
                >
                    {slides.map((slide) => <ModelSlide key={slide.instTag} {...slide} />)}
                </Slider>
            )}

            <h2 className="m-header centered">Advantages</h2>
            <p className="centered">Our visual algorithms provide not only the highest quality images with characters virtually indistinguishable from real people, but also plausibly mimic any pose and details down to the smallest emotions.</p>

            <PointerDown>
                <>Soon to come</>
            </PointerDown>

            <h2 className="m-header centered">Pre-Release<br />in March</h2>
            <p className="centered">Your participation in the pre-release programme will help a lot in the development of the project, but in exchange you will get a lot of goodies:</p>

            <div className="benefits-section centered">
                <BenefitBlock>
                    <>Lifetime discount on content<br />creation subscriptions of all types</>
                </BenefitBlock>

                <BenefitBlock>
                    <>Of course, you'll be one of the first to<br />create your character before the<br />official release date</>
                </BenefitBlock>

                <BenefitBlock>
                    <>Early access to all<br />updates and new features </>
                </BenefitBlock>

                <BenefitBlock>
                    <>And all<br />our love</>
                </BenefitBlock>
            </div>

            <p className="centered">We would appreciate any support on social media or if you just tell your friends about us. To make sure you don't miss the Pre-Release and stay up to date with our news, consider signing up for our newsletter.</p>

            <Footer />
        </section>
    );
}