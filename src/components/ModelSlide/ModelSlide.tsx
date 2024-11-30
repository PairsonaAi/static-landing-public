import "./ModelSlide.css";

export type ModelSlideData = {
    fullName: string;
    instTag: string;
    imageURL: string;
    modelId: string;
};

export default function ModelSlide({ fullName, instTag, imageURL }: ModelSlideData) {
    return (
        <div className="model-slide">
            <img
                className="model-slide__image"
                src={imageURL}
                alt={fullName}
            ></img>

            <h3 className="model-slide__bio">{fullName}</h3>
            {instTag !== "" && <span className="model-slide__inst">{`@${instTag}`}</span>}
        </div>
    );
}