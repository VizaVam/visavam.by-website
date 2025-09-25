const Footer = () => {
    return (
        <footer id="contacts" className="bg-orange-500 text-white">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-[5%] py-8 relative">
                {/* Первая и вторая колонка (Услуги и Контакты вместе) */}
                <div className="w-full lg:w-[66%] flex md:flex-row gap-8 order-1">
                    {/* Услуги */}
                    {/*<div className="w-min md:w-[20%]">*/}
                    {/*  <h3 className="text-lg">Услуги</h3>*/}
                    {/*</div>*/}
                    {/* Контакты */}
                    <div className="md:w-2/3">
                        <h3 className="text-lg mb-4">Контакты</h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center">
                                <img src="/phone-white.svg" alt="Телефон" className="mr-2"/>
                                <div>
                                    <a href="tel:+375296775470" className="hover:underline">
                                        <noindex>
                                            +375296775470
                                        </noindex>
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <img src="/location-white.svg" alt="Местоположение" className="mr-2"/>
                                <a
                                    href="https://www.google.com/maps/place/Visa+Vam/@53.910344,27.5473083,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfe91ef014a9:0xa6163600e41617e9!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11x1ym4kj8?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"

                                >
                                    <noindex>
                                        Минск, пр. Победителей 17, офис 1204<br/>(метро Немига)
                                    </noindex>
                                </a>
                            </li>
                            <li className="flex items-center pt-4">
                                <img src="/phone-white.svg" alt="График работы" className="mr-2 opacity-0"/>
                                <noindex>
                                    Пн-Пт: 09:00 - 19:00 <br/>
                                    Суббота: 10:00 - 14:00 <br/>
                                    Воскресенье: выходной
                                </noindex>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Третья колонка (Соцсети снизу с отступом) */}
                <div className="w-full mt-8 lg:mt-0 lg:w-[33%] flex flex-col items-center lg:items-start gap-4 order-2">
                    <div className="flex justify-center lg:justify-start space-x-8">
                        <a
                            href="https://www.instagram.com/visavam.by/profilecard/?igsh=YnRwZGh4Y3Jld2pj"
                            aria-label="Instagram"
                            className="hover:opacity-80"
                        >
                            <noindex>
                                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8"/>
                            </noindex>
                        </a>
                        <a href="viber://chat?number=%2B375293734870" aria-label="Viber" className="hover:opacity-80"
                        >
                            <noindex>
                                <img src="/viber.svg" alt="Viber" className="w-8 h-8"/>
                            </noindex>
                        </a>
                        {/*<a href="viber://chat?number=375291234567" aria-label="Viber" className="hover:opacity-80">*/}
                        {/*  <img src="/viber.svg" alt="Viber" className="w-8 h-8" />*/}
                        {/*</a>*/}
                        <a href="https://wa.me/375257654320" aria-label="WhatsApp" className="hover:opacity-80"
                        >
                            <noindex>
                                <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8"/>
                            </noindex>
                        </a>
                        <a href="https://t.me/+375295648334" aria-label="Telegram" className="hover:opacity-80"
                        >
                            <noindex>
                                <img src="/telegram.svg" alt="Telegram" className="w-8 h-8"/>
                            </noindex>
                        </a>
                    </div>
                </div>
            </div>

            {/* Нижняя строка */}
            <div className="bg-blue-800 py-4 mt-6 px-[5%]">
                {/*<a*/}
                {/*  href="/public-offer.pdf"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*  className="text-sm text-[#E6E6E6] underline"*/}
                {/*>*/}
                {/*  Публичная оферта*/}
                {/*</a>*/}
            </div>
        </footer>
    );
};

export default Footer;