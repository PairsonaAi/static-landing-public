import axios from "axios";

import { ModelSlideData } from "src/components/ModelSlide/ModelSlide";
import { WaitlistEntry } from "src/components/Admin/Admin";

export default class Backend {
    static async getSlides() {
        const { data }: { data: ModelSlideData[] } = await axios.get("/models_preview");

        // const data: ModelSlideData[] = [{
        //     fullName: "Jane Levy",
        //     instTag: "levyjinxx",
        //     imageURL: "https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/e57615c9-feb4-474d-951e-32914ea70700/tn",
        //     modelId: "123"
        // }, {
        //     fullName: "Lisa Murray",
        //     instTag: "murrmeow",
        //     imageURL: "https://img6.arthub.ai/63bd3f96-e514.webp",
        //     modelId: "123"
        // }, {
        //     fullName: "Margot Almond",
        //     instTag: "almargotcha",
        //     imageURL: "https://img6.arthub.ai/64faa451-deb9.webp",
        //     modelId: "123"
        // }, {
        //     fullName: "Jane Levy",
        //     instTag: "levyjinxx",
        //     imageURL: "https://images.nightcafe.studio/jobs/9sWwr5BaPm6fB6TaSsob/9sWwr5BaPm6fB6TaSsob--1--8zycp.jpg?tr=w-1600,c-at_max",
        //     modelId: "123"
        // }];

        return data;
    }

    static async subscribeEmail(email: string) {
        const res: any = axios.post("/waitlist/join", { email });

        return res;
    }

    static async login(email: string, password: string) {
        const res: any = axios.post("/admin/login", { email, password });

        return res;
    }

    static async checkAdmin() {
        const res: any = axios.get("/admin");

        return res;
    }

    static async fetchWaitlist() {
        const { data }: { data: WaitlistEntry[] } = await axios.get("/waitlist");

        return data;
    }

}