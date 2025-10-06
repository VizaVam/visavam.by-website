import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Header = ({onOpenModal, onScrollTo}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // Управление плавающей кнопкой
    const [isScrolled, setIsScrolled] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(true);
    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-31T23:59:59+05:00');

    const handleScrollTo = (id) => {
        const target = document.querySelector(id);
        if (target) {
            const offset = id === "#services" ? 80 : 150;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - offset,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            if (isMenuOpen) {
                setShowFloatingButton(false);
                return;
            }

            // const mainButton = document.querySelector('.bbbt');
            // if (!mainButton) {
            //     setShowFloatingButton(false);
            //     return;
            // }

            // const buttonRect = mainButton.getBoundingClientRect();
            setShowFloatingButton(true);
        };

        handleScroll(); // Ensure state updates if the user has already scrolled
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen, isFloatingMenuOpen]);

    useEffect(() => {
        if (isMenuOpen || isFloatingMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen, isFloatingMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="flex bg-orange-500 mdd:justify-center mdd:items-center">
                    {/* Верхняя панель */}
                    <div
                        className="bg-customBlue text-white block sm:flex items-center sm:pl-[5%] px-4 py-2 w-[54%] clip-path-mobile clip-path-desktop"
                    >
          <span className="font-light text-[10px] sm:text-base">
            <noindex>
              пр-т Победителей 17, офис 1204
            </noindex>
          </span>
                        <br/>
                        <span className="sm:ml-6 font-light text-[10px] sm:text-base">
              <noindex>
              09:00-19:00
            </noindex>
            </span>
                    </div>

                    <div
                        className="bg-orange-500 text-white items-center justify-end sm:pr-[5%] px-4 py-2 w-[48%] sm:flex"
                    >
                        <noindex className={"sm:hidden flex justify-end"}>
                            <a href="tel:+375296775470" className={"text-[18px] font-semibold hover:underline"}>
                                +375296775470
                            </a>
                        </noindex>
                        <noindex
                            className={"bg-orange-500 text-white items-center justify-end py-2 sm:flex mdd:hidden gap-4"}>
                            <a href="tel:+375296775470" className={"hover:underline text-lg"}>
                                +375296775470
                            </a>
                            <a
                                href="https://wa.me/375257654320"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <img src="/whatsapp.svg" alt="WhatsApp" className="h-7"/>
                            </a>
                            <a
                                href="viber://chat?number=%2B375293734870"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <img src="/viber.svg" alt="Viber" className="h-7"/>
                            </a>
                            <a
                                href="https://t.me/+375295648334"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <img src="/telegram.svg" alt="Telegram" className="h-7"/>
                            </a>
                            {/*<a href="mailto:l336906097@gmail.com" className="mr-2">*/}
                            {/*  <img src="/mail.svg" alt="E-Mail" className="h-5"/>*/}
                            {/*</a>*/}
                        </noindex>
                    </div>
                </div>

                {/* Логотип и навигация */}
                <div className={`text-black flex justify-between w-full z-[1] items-center p-4 px-[5%] ${
                    isScrolled ? "bg-white" : "bg-transparent"
                }`}>
                    <div className="flex items-center">
                        <a href="#" className="hover:underline">
                            <img src="/new-logo.svg" alt="Logo" className="h-14 sm:h-20 mr-2"/>
                        </a>
                    </div>
                    {/* Бургер меню для мобильной версии */}
                    <div className="sm:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <img src="/burger.svg" alt="Menu" className="h-4"/>
                        </button>
                    </div>
                    {/* Навигация для десктопа */}
                    <nav className="hidden sm:flex space-x-[40px]">
                        <button onClick={() => handleScrollTo("#services")} className="hover:underline">
                            Услуги
                        </button>
                        <button onClick={() => handleScrollTo("#contacts")} className="hover:underline">
                            Контакты
                        </button>
                        <button
                            onClick={onOpenModal}
                            className="header__bottom-right-btn relative overflow-hidden sm:w-max mdd:w-full text-[16px] lg:w-auto bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out z-50"
                        >
                            {/* Три медленные пульсирующие волны, затем пауза */}
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
                    </nav>
                </div>
                {currentDate < discountEndDate && (
                    <div className="mdd:hidden px-[7%] bg-orange-500 text-lg font-medium text-white py-1.5 text-center">
                        <p><span className="font-bold text-blue-950 underline">АКЦИЯ до 31.07.2025!</span> Испанская
                            безличная виза - <span className="font-bold text-blue-950 underline">1600 BYN</span> (<span
                                className="line-through">1850 BYN</span>)</p>
                    </div>
                )}

                {/* Мобильное меню */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-[2] ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className={`bg-white w-3/4 h-full flex flex-col p-4 sidebar ${
                            isMenuOpen ? "sidebar-open" : ""
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="self-end mb-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <img src="/close.svg" alt="Close"/>
                        </button>
                        <button className="py-2 text-lg" onClick={() => {
                            handleScrollTo("#services");
                            setIsMenuOpen(false);
                        }}>
                            Услуги
                        </button>
                        <button className="py-2 text-lg" onClick={() => {
                            handleScrollTo("#contacts");
                            setIsMenuOpen(false);
                        }}>
                            Контакты
                        </button>
                        <button
                            onClick={() => {
                                onOpenModal();
                                setIsMenuOpen(false);
                            }}
                            className="header__bottom-right-btn relative overflow-hidden sm:w-max mdd:w-full text-[16px] lg:w-auto bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out z-50"
                        >
                            {/* Три медленные пульсирующие волны, затем пауза */}
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
                        {/* Номера телефонов */}
                        {/*<a href="tel:+375296800620" className="py-2 text-lg">*/}
                        {/*  +375296800620*/}
                        {/*</a>*/}
                        {/*<a href="tel:+375293734870" className="py-2 text-lg">*/}
                        {/*  +375293734870*/}
                        {/*</a>*/}
                    </div>
                </div>
            </header>
            {/* Фиксированная кнопка */}
            <div className="fixed bottom-16 right-7 z-50 sm:hidden">
                {/* Затемнение фона */}
                <AnimatePresence>
                    {isFloatingMenuOpen && (
                        <>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 0.5}}
                                exit={{opacity: 0}}
                                className="fixed inset-0 bg-black z-40"
                                onClick={() => setIsFloatingMenuOpen(false)}
                            />
                            {/* Блокировка скролла */}
                            <style jsx global>{`
                                body {
                                    overflow: hidden;
                                    position: relative;
                                    height: 100%;
                                    touch-action: none;
                                }
                            `}</style>
                        </>
                    )}
                </AnimatePresence>

                <div className="relative">
                    {/* Анимированные волны вокруг кнопки */}
                    {!isFloatingMenuOpen && [0].map((i) => (
                        <motion.span
                            key={i}
                            className="absolute top-0 left-0 inset-0 w-12 h-12 rounded-full border-2 border-yellow-400 pointer-events-none"
                            initial={{scale: 1, opacity: 0.7}}
                            animate={{scale: 2, opacity: 0}}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 1 + (i * 0.2),
                                repeatDelay: 1,
                            }}
                        />
                    ))}

                    {/* Основная кнопка с анимацией */}
                    <motion.button
                        onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
                        className="relative z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                        whileTap={{scale: 0.9}}
                    >
                        <AnimatePresence mode="wait">
                            {!isFloatingMenuOpen ? (
                                <motion.img
                                    key="request-icon"
                                    src="/request.svg"
                                    alt="Контакты"
                                    className="w-12 h-12"
                                    initial={{rotate: 0}}
                                    animate={{rotate: 0}}
                                    exit={{rotate: 180, opacity: 0}}
                                    transition={{duration: 0.3}}
                                />
                            ) : (
                                <motion.span
                                    key="close-icon"
                                    initial={{rotate: -180, opacity: 0}}
                                    animate={{rotate: 0, opacity: 1}}
                                    exit={{rotate: 180, opacity: 0}}
                                    transition={{duration: 0.3}}
                                    className="text-2xl font-bold flex items-center justify-center w-full h-full bg-gray-300 rounded-full"
                                >
                                    ×
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Раскрывающееся меню с анимацией */}
                    <AnimatePresence>
                        {isFloatingMenuOpen && (
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 20}}
                                transition={{duration: 0.3}}
                                className="absolute bottom-16 right-0 flex flex-col items-end space-y-3 z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.a
                                    href="https://wa.me/375257654320"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
                                </motion.a>
                                <motion.a
                                    href="viber://chat?number=%2B375293734870"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <img src="/viber.svg" alt="Viber" className="w-12 h-12"/>
                                </motion.a>
                                <motion.a
                                    href="https://t.me/+375295648334"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <img src="/telegram.svg" alt="Telegram" className="w-12 h-12"/>
                                </motion.a>
                                <motion.a
                                    href="tel:+375296775470"
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <img src="/call.svg" alt="Phone" className="w-12 h-12"/>
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Плавающая кнопка "Оформить заявку" */}
                    {showFloatingButton && !isMenuOpen && (
                        <div className="fixed bottom-3 right-0 w-full px-[5%] flex justify-center z-50 sm:hidden">
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onOpenModal();
                                }}
                                className="relative overflow-hidden w-full bg-customBlue hover:bg-blue-500 text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out z-50"
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
                                            repeatDelay: 0.5,
                                            delay: i * 0.4,
                                        }}
                                    >
                                        <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
                                    </motion.span>
                                ))}
                                Получить консультацию
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;