import { ModelSlideData } from "src/components/ModelSlide/ModelSlide";

export default class Backend {
    static async getSlides() {
        const data: ModelSlideData[] = [
            {
                fullName: "Jane Levy",
                instTag: "levyjinxx",
                imageURL: require('../assets/images/models/model_1.png'),
                modelId: "123"
            },
            {
                fullName: "Lisa Murray",
                instTag: "murrmeow",
                imageURL: require('../assets/images/models/model_2.png'),
                modelId: "123"
            }, 
            {
                fullName: "Margot Almond",
                instTag: "almargotcha",
                imageURL: require('../assets/images/models/model_3.png'),
                modelId: "123"
            }, 
            {
                fullName: "Emi White",
                instTag: "",
                imageURL: require('../assets/images/models/model_4.png'),
                modelId: "123"
            }, 
        ];

        return data;
    }
}