import {useEffect, useState} from "react";

const Announcement = () => {
    const [activeAnnouncement, setActiveAnnouncement] = useState(null);

    useEffect(() => {
        const checkAnnouncements = () => {
            const now = new Date();

            // First announcement period (April 25-29)
            const firstStart = new Date("2025-04-25T00:00:00+05:00");
            const firstEnd = new Date("2025-04-29T23:59:59+05:00");

            // Second announcement period (April 30-May 4)
            const secondStart = new Date("2025-04-30T00:00:00+05:00");
            const secondEnd = new Date("2025-05-04T23:59:59+05:00");

            // Third announcement period (May 30-May 10)
            const thirdStart = new Date("2025-05-08T00:00:00+05:00");
            const thirdEnd = new Date("2025-05-10T23:59:59+05:00");

            // Fourth announcement period (May 30-May 10)
            const fourthStart = new Date("2025-07-02T00:00:00+05:00");
            const fourthEnd = new Date("2025-07-05T23:59:59+05:00");

            // Fifth announcement period (May 30-May 10)
            const fifthStart = new Date("2025-07-11T00:00:00+05:00");
            const fifthEnd = new Date("2025-07-12T23:59:59+05:00");

            if (now >= firstStart && now <= firstEnd) {
                setActiveAnnouncement('first');
            } else if (now >= secondStart && now <= secondEnd) {
                setActiveAnnouncement('second');
            } else if (now >= thirdStart && now <= thirdEnd) {
                setActiveAnnouncement('third');
            } else if (now >= fourthStart && now <= fourthEnd) {
                setActiveAnnouncement('fourth');
            } else if (now >= fifthStart && now <= fifthEnd) {
                setActiveAnnouncement('fifth');
            } else {
                setActiveAnnouncement(null);
            }
        };

        checkAnnouncements();
        const interval = setInterval(checkAnnouncements, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    const announcements = {
        first: {
            title: "Изменился график работы!",
            lines: [
                "сб 26.04. 09:00-19:00",
                "пн 28.04. 10:00-14:00",
                "вс 27.04. пн 28.04. вт 29.04. - выходные дни"
            ]
        },
        second: {
            title: "Изменился график работы!",
            lines: [
                "чт 01.05. выходной день",
                "пт 02.05. с 9:00 до 19:00",
                "сб 03.05. с 10:00 до 14:00",
                "вс 04.05. выходной день"
            ]
        },
        third: {
            title: "Изменился график работы!",
            lines: [
                "пт 09.05. выходной день",
                "сб 10.05. с 10:00 до 14:00"
            ]
        },
        fourth: {
            title: "Изменился график работы!",
            lines: [
                "чт 03.07. пт 04.07. - выходные дни",
                "сб 05.07. - 10:00-14:00"
            ]
        },
        fifth: {
            title: "Изменился график работы!",
            lines: [
                "сб 12.07. - 09:00-19:00"
            ]
        }
    };

    return (
        <>
            {activeAnnouncement && (
                <div className="px-[5%] md:pt-56 lg:pt-60 mdd:pb-56 -mt-48">
                    <div
                        className="md:w-max w-full py-4 md:py-6 md:px-10 bg-orange-500 text-white text-center m-auto font-bold">
                        <p className="md:text-2xl text-lg">Внимание!</p>
                        <p className="md:text-2xl text-lg">{announcements[activeAnnouncement].title}</p>
                        {announcements[activeAnnouncement].lines.map((line, index) => (
                            <p key={index} className="md:text-2xl text-lg">{line}</p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Announcement;