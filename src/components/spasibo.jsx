"use client"; 

export default function SpasiboPage() {
    const goBack = () => {
        const previousPage = sessionStorage.getItem("previousPage");
        if (previousPage) {
            window.location.href = previousPage; 
        } else {
            window.location.href = "/";
        }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white px-4">
      <h1 className="font-bold text-black mb-4 text-center leading-[3rem] text-[2.25rem]">
        СПАСИБО ЗА ЗАЯВКУ!
      </h1>
      <p className="text-black font-bold mb-8 text-center max-w-md">
        Мы свяжемся с Вами в ближайшее время и проконсультируем по всем вопросам!
      </p>

      <div className="flex mdd:flex-col mdd:w-full">
        <button
          onClick={goBack}
          className="mdd:text-[18px] text-[16px] px-6 py-3 mdd:mb-5 mdd:w-full border-2 rounded-full border border-[#15419E] bg-white transition 1024m:mr-0 mr-[60px]"
        >
          Вернуться
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="mdd:text-[18px] text-[16px] px-6 py-3 mdd:w-full mdd:m-0 bg-customBlue hover:bg-blue-600 text-white rounded-full hover:bg-blue-600 transition"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}