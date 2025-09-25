import {useState} from "react";

const faqData = [
  {
    question: "Почему именно вы?",
    answer:
      "Наша компания на рынке уже более 10-ти лет. За это время наши специалисты сталкивались с разными случаями и находили индивидуальный подход для каждого клиента.",
  },
  {
    question: "Какая система скидок на ваши услуги?",
    answer: `
      Наша компания предоставляет скидки:
      <ul class="list-disc ml-6">
<!--        <li>США + Шенген – 10%</li>-->
        <li>Семья от 4-х человек – 13%</li>
        <li>Семья от 3-х человек – 11%</li>
        <li>Повторное обращение после отказа – 16%</li>
        <li>Постоянный клиент – 5%</li>
      </ul>
    `,
  },
  {
    question: "Какие способы оплаты ваших услуг?",
    answer: `
      Мы принимаем платежи:
      <ul class="list-disc ml-6">
        <li>Наличными в офисе, с получением чека</li>
        <li>Банковской картой</li>
        <li>Система ЕРИП Оплата</li>
      </ul>
      Более подробно о всех нюансах наши специалисты готовы проконсультировать Вас по номеру телефона.
<!--      <a href="/price-list.pdf" target="_blank" rel="noopener noreferrer" class="text-orange-500 underline">-->
<!--        здесь-->
<!--      </a>.-->
    `,
  },
  // {
  //   question: "Сколько мои документы будут на рассмотрении?",
  //   answer:
  //     "Время рассмотрения документов зависит от страны и направления. Наша компания не несет ответственности за задержку документов.",
  // },
  {
    question: "Могут ли к вам обратиться за услугой не граждане Республики Беларусь?",
    answer:
      "Да, могут. Если есть ВНЖ Беларуси (для граждан Российской Федерации есть нюансы, уточняйте у менеджера нашего центра) или временная регистрация проживания от 180 дней на момент подачи документов.",
  },
  // {
  //   question: "На сколько заранее я могу начать оформление визы?",
  //   answer:
  //     "Для работы с нашим агентством для получения всех нужных консультаций — Вы можете начинать сотрудничество в любое комфортное время. Но на момент подачи документов в визовый центр — Вы можете запрашивать визу на ближайшие полгода.",
  // },
  // {
  //   question: "Есть ли отказы при получении? Как вы решаете данный вопрос?",
  //   answer:
  //     "Да. Отказы в визах бывают. Причин отказа может быть достаточно много, и зачастую мы их можем не знать, потому что это решение Консула. Однако мы предлагаем альтернативы, скидки, а также оказываем бесплатные консультации по апелляции.",
  // },
  // {
  //   question: "Какие дополнительные услуги вы оказываете?",
  //   answer: `
  //     Дополнительные услуги нашей компании:
  //     <ul class="list-disc ml-6">
  //       <li>Страхование;</li>
  //       <li>Помощь в получении комплекта документов;</li>
  //     </ul>
  //   `,
  // },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="pt-12 px-[5%]">
      <h2 className="text-2xl lg:text-3xl font-medium mb-8 lg:mb-16">Вопрос-ответ</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-orange-500 rounded-[30px] mdd:rounded-[55px]">
            <button
              className="flex justify-between items-center w-full bg-orange-500 rounded-full text-white py-4 px-6 font-medium text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>В: {faq.question}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 rotate-icon ${openIndex === index ? "open" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div
                className="bg-white py-4 px-6 text-gray-700 rounded-full"
                dangerouslySetInnerHTML={{__html: faq.answer}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
