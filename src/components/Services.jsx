import {useEffect, useState} from "react";

const countries = [
  { name: "Польша", img: "/poland.png", svg: "/poland_flag.svg" },
  { name: "Словения", img: "/slovenia.png", svg: "/slovenia_flag.svg" },
  { name: "Германия", img: "/germany.png", svg: "/germany_flag.svg" },
  { name: "Испания", img: "/spain.png", svg: "/spain_flag.svg" },
  { name: "Франция", img: "/france.png", svg: "/france_flag.svg" },
  { name: "Литва", img: "/litva.png", svg: "/litva_flag.svg" },
  { name: "Латвия", img: "/latvia.png", svg: "/latvia_flag.svg" },
  { name: "США", img: "/usa.png", svg: "/usa_flag.svg" },
  { name: "Великобритания", img: "/greatbritain.png", svg: "/greatbritain_flag.svg" },
  { name: "Болгария", img: "/bulgaria.png", svg: "/bulgaria_flag.svg" },
  { name: "Нидерланды", img: "/netherland.png", svg: "/netherland_flag.svg" },
  { name: "Греция", img: "/greece.png", svg: "/greece_flag.svg" },
  { name: "Венгрия", img: "/hungary.png", svg: "/hungary_flag.svg" },
  { name: "Италия", img: "/italy.png", svg: "/italy_flag.svg" },
  { name: "Румыния", img: "/romania.png", svg: "/romania_flag.svg" },
  { name: "Австрия", img: "/austria.png", svg: "/austria_flag.svg" },
  { name: "Китай", img: "/china.png", svg: "/china_flag.svg" },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);

  // Проверяем ширину экрана
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Проверяем на начальной загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ограничиваем список стран для мобильных
  const displayedCountries = isMobile && !showAllCountries ? countries.slice(0, 8) : countries;

  return (
    <section id="services" className="px-[5%] pt-16 lg:pt-24">
      <h2 className="text-2xl lg:text-3xl font-medium mb-8 lg:mb-16">Поможем отправиться в путешествие</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedCountries.map((country, index) => (
          <div
            key={index}
            className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm"
          >
            <img
              src={country.img}
              alt={country.name}
              className="w-full object-cover"
            />
            <div className="lg:p-4 p-2">
              <div className="flex flex-row gap-2">
                <img src={country.svg} alt={country.name} className="h-6"/>
                <p className="font-medium">{country.name}</p>
              </div>
              {country.subtitle && (
                <p className="text-sm">{country.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Еще больше услуг" */}
      {isMobile && !showAllCountries && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllCountries(true)}
            className="bg-customBlue w-full hover:bg-blue-500 text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px]"
          >
            Еще больше стран
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;
