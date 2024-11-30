import "./Admin.css";
import { useState, useEffect } from 'react';
import Backend from "src/middleware/Backend";

export type WaitlistEntry = {
    email: string;
    joinDate: string;
};

export default function Admin() {
    const [waitlistData, setWaitlistData] = useState<any[]>([]);

    useEffect(() => {
        fetchWaitlistData();
    }, []);

    const fetchWaitlistData = async () => {
        const waitlist = await Backend.fetchWaitlist();
        console.log(waitlist);
        setWaitlistData(waitlist);
    }

    return (
        <section className="page waitlist-page">
            <div className="header-section">
                <h2>Waitlist</h2>
            </div>

            <div className="waitlist-section">
            {
                waitlistData.map((item, index) => 
                    <div className="waitlist-section__block" key={index}>
                        <h3 className="waitlist-section__text">{item.email}</h3>
                        <p className="waitlist-subtext">{`Joined Date: ${new Date(item.joinDate).toLocaleDateString()}`}</p>
                    </div>
                )
            }
            </div>
        </section>
    );
}