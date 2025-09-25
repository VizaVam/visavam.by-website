import {useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import {CarouselButton} from "../constants/Icons.jsx";

const reviews = [
  {
    id: 1,
    name: "Владимир Зайцев",
    text: "Выражаю искреннюю признательность за консультации и помощь в планирование моего путешествия.",
    image: "/1м.png",
  },
  {
    id: 2,
    name: "Игорь Барташов",
    text: "Помогли планировать поездку очень оперативно. Обратился, приехал в офис, все сделали! Профессионализм!",
    image: "/2м.png",
  },
  {
    id: 3,
    name: "Дмитрий Вольский",
    text: "Спасибо за профессиональную помощь!",
    image: "/3м.png",
  },
  {
    id: 4,
    name: "Аганова Марина",
    text: "Благодарю менеджеров за профессиональную консультацию по моей нестандартной ситуации.",
    image: "/4м.png",
  },
  {
    id: 5,
    name: "Ирина Васкина",
    text: "Обращаюсь в третий раз в компанию. И сестра моя обращалась, и муж. Искренне благодарю директора, знакомы лично уже, менеджеров рекомендую всем своим знакомым.",
    image: "/5м_1.png",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const gap = 16;

  // Определяем количество видимых карточек в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3.5);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize(); // Проверяем при загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Переключение на следующий слайд
  const nextSlide = () => {
    if (currentIndex < reviews.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Свайп-обработчики
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className="py-12 px-[5%]" {...swipeHandlers}>
      <h2 className="text-2xl lg:text-3xl font-medium mb-8 lg:mb-16">
        Отзывы наших клиентов
      </h2>
      <div className="relative overflow-hidden">
        {/* Карточки */}
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * gap}px))`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full lg:w-1/4 flex-shrink-0 bg-[#FAFAFA] border-[1px] border-[#ECECEC] rounded-[2px] p-6 text-center transition-transform duration-500 ease-in-out transform"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Навигация */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className={`text-gray-600 hover:text-orange-500 transition-colors duration-300 ${
            currentIndex === 0 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentIndex === 0}
          aria-label="Назад"
        >
          <CarouselButton color={currentIndex > 0 ? "#F86F00" : "#595959"}/>
        </button>
        <button
          onClick={nextSlide}
          className={`text-orange-500 hover:text-orange-600 transition-colors duration-300 ${
            currentIndex >= reviews.length - visibleCards &&
            "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentIndex >= reviews.length - visibleCards}
          aria-label="Вперед"
        >
          <CarouselButton
            isRight={true}
            color={currentIndex < reviews.length - visibleCards ? "#F86F00" : "#595959"}
          />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
