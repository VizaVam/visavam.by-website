import Announcement from "./Announcement.jsx";
import {motion} from "framer-motion";

const Hero = ({onOpenModal}) => {
    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-31T23:59:59+05:00');

    return (
        <section
            className="lg:px-16 lg:mt-[70px] mt-[160px] mdd:pb-8 pb-20 lg:pb-0 z-0 flex flex-col lg:flex-row lg:items-start relative">
            {/* Левая часть */}
            <div className="lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%]">
                <h1 className="text-[40px] mdd:text-[24px] font-semibold text-black leading-tight">
                    Начни подготовку<br/>
                    к путешествию СЕЙЧАС
                </h1>
                <p
                    className="pl-6 text-[32px] mdd:text-[20px] text-[#F86F00] font-caveat transform rotate-[-4deg] opacity-65"
                >
                    Преврати мечты в реальность с Visa Vam
                </p>
            </div>

            {/* Правая часть */}
            <div
                className="w-full lg:flex items-center mdd:-mt-[50%] i12pro:-mt-[70%] ise:-mt-[75%] lg:mt-0 relative z-5">
                {/* Изображение */}
                <img
                    src="/banner-hero.svg"
                    alt="Оформление виз с VisaVam.by – Легко и Доступно"
                    className="relative lg:top-0 lg:left-[30%] lg:w-[55%] mdd:hidden"
                />
                <img
                    src="/main-m.svg"
                    alt="Оформление виз с VisaVam.by – Легко и Доступно"
                    className="relative lg:top-0 lg:left-[30%] lg:w-[55%] md:hidden w-[840px] h-[802px]"
                />

                <div className="lg:hidden absolute bottom-0 mdd:pb-[50%] i12pro:pb-[57%] ise:pb-[60%] w-full px-[5%]">
                    <button
                        onClick={onOpenModal}
                        className="bbbt relative overflow-hidden w-[100%] bg-customBlue text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{scale: 0, opacity: 1.5}}
                                animate={{scale: 4, opacity: 0}}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    repeatDelay: 0.5, // Пауза после трех волн
                                    delay: i * 0.4, // Волны идут друг за другом
                                }}
                            >
                                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
                            </motion.span>
                        ))}
                        Получить консультацию
                    </button>
                </div>
            </div>

            <div className={"md:hidden"}>
                <Announcement/>
            </div>

            {currentDate < discountEndDate && (
                <div
                    className="sm:hidden -mt-48 i12pro:-mt-48 ise:-mt-52 px-[7%] bg-orange-500 text-lg font-medium text-white py-1.5 text-center">
                    <p><span className="font-bold text-blue-950 underline">АКЦИЯ до 31.07.2025!</span><br/>
                        Испанская безличная виза - <span className="font-bold text-blue-950 underline">1600 BYN</span> (<span
                            className="line-through">1850 BYN</span>)</p>
                </div>
            )}

            {/* Список преимуществ */}
            <ul
                className={`lg:absolute top-[70%] right-[4%] lg:transform lg:-translate-y-1/2 space-y-4 text-left p-4 rounded-md mdd:mt-4 ${currentDate >= discountEndDate ? 'mdd:-mt-[45%] i12pro:-mt-[55%]' : ''}`}>
                <li className="flex items-center text-lg">
                    <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                    <p className="font-[500] text-[20px]">
                        Более 10 лет <br/>
                        <span className="text-[16px] text-[#808080]">на рынке</span>
                    </p>
                </li>
                <li className="flex items-center text-lg">
                    <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                    <p className="font-[500] text-[20px]">
                        20 000+<br/>
                        <span className="text-[16px] text-[#808080]">успешных кейсов</span>
                    </p>
                </li>
                <li className="flex items-center text-lg">
                    <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                    <p className="font-[500] text-[20px]">
                        10 000+<br/>
                        <span className="text-[16px] text-[#808080]">довольных клиентов</span>
                    </p>
                </li>
                <li className="flex items-center text-lg font-[500] text-[20px]">
                    <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                    Персональный подход
                </li>
            </ul>
        </section>
    )
};

export default Hero;