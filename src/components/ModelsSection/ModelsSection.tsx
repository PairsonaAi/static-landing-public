import "./ModelsSection.css";

import Slider from "../Slider/Slider";
import ModelSlide from "../ModelSlide/ModelSlide";

import { ModelSlideData } from "../ModelSlide/ModelSlide";

type Props = {
    slides: ModelSlideData[] | null
}

export default function ModelsSection({ slides }: Props) {
    return (
        <section className="page models-page desktop">
            <h2 className="models__header">Our models</h2>

            {slides && (
                <Slider
                    finisherText="more to come"
                >
                    {slides.map((slide) => <ModelSlide key={slide.instTag} {...slide} />)}
                </Slider>
            )}
        </section>
    );
}