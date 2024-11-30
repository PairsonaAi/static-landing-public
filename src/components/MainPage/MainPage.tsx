import { useState, useEffect } from "react";
import Backend from "src/middleware/Backend";

import "./MainPage.css";

import FrontSection from "../FrontSection/FrontSection";
import ProcessSection from "../ProcessSection/ProcessSection";
import ModelsSection from "../ModelsSection/ModelsSection";
import ReleaseSection from "../ReleaseSection/ReleaseSection";

import MobileMiddleSection from "../MobileMiddleSection/MobileMiddleBlock";

import { ModelSlideData } from "../ModelSlide/ModelSlide";

export default function MainPage() {
    const [slides, setSlides] = useState<ModelSlideData[] | null>(null)

    useEffect(() => {
        (async () => {
            const slidesData = await Backend.getSlides();
            setSlides(slidesData);
        })();
    }, []);

    return (
        <main className="main-page">
            <FrontSection />
            <MobileMiddleSection slides={slides} />
            <ProcessSection />
            <ModelsSection slides={slides} />
            <ReleaseSection />
        </main>
    );
}