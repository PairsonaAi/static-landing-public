import "./ProcessSection.css";

import PageSplitter from "../PageSplitter/PageSplitter";

export default function ProcessSection() {
    return (
        <section className="page process-page desktop">
            <PageSplitter
                title="How it works?"
                imageURL="https://storage.googleapis.com/static_object_storage-instance-1/website_images/page1.png"
            >
                <>
                    <h2 className="page-splitter__header">Creation</h2>
                    <p className="page-splitter__text">Come up with your character's appearance, personality and distinctive features. Using the convenient constructor, transfer your ideas into a digital image. Create an account in your desired social networks and get an initial boost.</p>
                    <h2 className="page-splitter__header">Content-making</h2>
                    <p className="page-splitter__text">Use the app every time you want to generate an image for publishing. You can set any place, time, pose and even the emotion of the character. </p>
                    <h2 className="page-splitter__header">Advantages</h2>
                    <p className="page-splitter__text">Our visual algorithms provide not only the highest quality images with characters virtually indistinguishable from real people, but also plausibly mimic any pose and details down to the smallest emotions. </p>
                </>
            </PageSplitter>
        </section>
    );
}