// components/VisaSupportSection.jsx (или .tsx)
"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

// const RippleButton = memo(({ onClick, children }) => (
//     <button
//         onClick={onClick}
//         className="relative overflow-hidden sm:w-max mdd:w-full text-[16px] lg:w-auto bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
//     >
//         {[0, 1, 2].map((i) => (
//             <motion.span
//                 key={i}
//                 className="absolute inset-0 flex items-center justify-center"
//                 initial={{ scale: 0, opacity: 1.5 }}
//                 animate={{ scale: 4, opacity: 0 }}
//                 transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeOut",
//                     repeatDelay: 0.5,
//                     delay: i * 0.4,
//                 }}
//             >
//                 <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full" />
//             </motion.span>
//         ))}
//         {children}
//     </button>
// ));
// RippleButton.displayName = 'RippleButton';

const VisaSupportSection = ({onOpenModal}) => {

    return (
        <div className="mx-auto w-full px-[5%] pt-16 lg:pt-24">
            <div className="bg-white">
                {/* Основной заголовок секции */}
                <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-6">
                    Услуги для бизнеса и корпоративных клиентов
                </h2>

                {/* Контейнер с градиентным фоном, аналогичный FormBlock */}
                <div className="bg-[#FAFAFA] rounded-lg shadow-lg border">

                    {/* Основной контент внутри контейнера */}
                    <div className="flex flex-col md:flex-row sm:gap-6">

                        {/* Левая часть: Изображение */}
                        <div className="mdd:hidden w-full md:w-1/2 flex justify-center items-center">
                            {/* Градиентный контейнер для изображения */}
                            <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg w-full">
                                <img
                                    src="/res2.webp" 
                                    alt="Мужчина с паспортом"
                                    width={500}
                                    height={500}
                                    className="mdd:hidden rounded-lg w-full h-auto object-cover bg-[#FAFAFA]"
                                    // layout="responsive" // Если используете Next.js Image legacy
                                />
                            </div>
                        </div>

                        {/* Правая часть: Текстовые блоки */}
                        <div className="w-full md:w-1/2 sm:py-10 sm:pr-8 mdd:py-4 mdd:px-4">

                            {/* Блок 1: Для туристических компаний */}
                            <div className="mb-6">
                                <ul className="list-none pl-0 space-y-1">
                                    <li className="flex gap-2 items-center">
                                        <img src="/check.svg" alt="" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                                        <span>Консультация по услугам</span>
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src="/check.svg" alt="" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                                        <span>Сопровождение на всех этапах</span>
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src="/check.svg" alt="" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                                        <span>Популярные направления: ЕС, США, Великобритания и др.</span>
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src="/check.svg" alt="" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                                        <span>Сопровождение на всех этапах релокации сотрудников</span>
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src="/check.svg" alt="" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                                        <span>Сопровождение семей</span>
                                    </li>
                                </ul>
                            </div>

                            
                            {/* Кнопка консультации, стилизованная как в FormBlock */}
                            <div className="mt-auto">
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
                                {/* <RippleButton onClick={openModal}>
                                    Получить консультацию
                                </RippleButton> */}
                            </div>
                        </div>

                        <div className={"sm:hidden"}>
                            {/* Левая часть: Изображение */}
                            <div className=" w-full md:w-1/2 flex justify-center items-center">
                                {/* Градиентный контейнер для изображения */}
                                <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg w-full">
                                    <img
                                        src="/res2.webp" // Замените на путь к вашему изображению
                                        alt="Мужчина с паспортом"
                                        width={500}
                                        height={500}
                                        className="rounded-lg w-full h-auto object-cover"
                                        // layout="responsive" // Если используете Next.js Image legacy
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaSupportSection;