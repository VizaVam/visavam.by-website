import { useState } from "react";
import { IMaskInput } from "react-imask";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  if (!isOpen) return null;

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^\d+]/g, "");
    const pattern = /^\+(375\d{9}|7\d{10}|48\d{9})$/;
    return pattern.test(cleaned);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneInput = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
    setErrors((prev) => ({ ...prev, agreement: "" }));
  };

  const getGAClientId = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('_ga='))
      ?.split('=')[1];
  
    if (cookieValue) {
      const parts = cookieValue.split('.');
  
      // Проверяем, что parts содержит нужное количество элементов (4)
      if (parts.length === 4) {
        // Объединяем parts[2] и parts[3], чтобы получить единую строку
        const combinedClientId = parts[2] + parts[3];  // Объединяем эти части как строку
  
        // Преобразуем строку в целое число (integer)
        return parseInt(combinedClientId, 10);  // Преобразуем в integer
      }
    }
    return null;  // Если clientId не найден или cookie не в ожидаемом формате
  };
  
  const getYandexClientId = () => {
      const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('_ym_uid='))
      ?.split('=')[1];

  // Преобразуем Yandex clientId в integer
    return cookieValue ? parseInt(cookieValue, 10) : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email } = formData;

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Поле обязательно к заполнению";
    if (!phone.trim()) {
      newErrors.phone = "Поле обязательно к заполнению";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Некорректный формат данных";
    }
    if (!isAgreed) newErrors.agreement = "Вы должны согласиться с офертой";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formattedPhone = `+${phone.replace(/\D/g, "")}`;

      // Email оставляем пустым, если не введен
      const finalEmail = email?.trim() || '';

      setIsSubmitting(true);

      const params = new URLSearchParams();
      params.append("u_name", name);
      params.append("u_phone", formattedPhone);
      params.append("u_email", finalEmail);
      params.append("source", "заявка с visavam.by лэндинга");

      if (params.get('utm_source')) {
        params.append("utm_source", params.get('utm_source'));
      }
      // if (params.get('utm_medium')) {
      //   params.append("utm_medium", params.get('utm_medium'));
      // }

      const gaClientId = getGAClientId();
      //const ymClientId = getYandexClientId();

      // if (gaClientId) { 
      //   params.append("r_cl_id", gaClientId);
      // }
      console.log("Отправляемые данные (URLSearchParams):", params.toString());
      
      const response = await fetch("https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      console.log("Request sent. Response status:", response.status);

      sessionStorage.setItem("previousPage", window.location.href);     
      window.location.href = "/spasibo";
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
      setMessage(
          "Произошла ошибка при отправке заявки. Приносим извинения за неудобства. Попробуйте повторно позже."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", email: "" });
    setErrors({});
    setMessage("");
    setIsSubmitted(false);
    setIsAgreed(true);
    onClose();
  };

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:p-0 sm:p-4 mdd:p-4">
        <div className="bg-white md:p-12 sm:p-6 mdd:p-6 rounded-[4px] shadow-lg max-w-md w-full relative">
          <button
              className="absolute top-8 right-8 text-[#F86F00] font-bold text-lg"
              onClick={handleClose}
          >
            <img src="/close.svg" alt="Закрыть" />
          </button>
          <h2 className="text-2xl font-medium mb-4">Оформить заявку</h2>

          {message ? (
              <div className="p-4 bg-gray-100 text-center rounded">
                {message}
              </div>
          ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                      type="text"
                      name="name"
                      placeholder="Имя*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border ${
                          errors.name ? "border-red-500" : "border-[#15419E]"
                      } rounded-full p-2`}
                  />
                  {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                <IMaskInput
                  mask={[
                  {
                      mask: "+{375} 00 000-00-00", // Беларусь
                      startsWith: "375",
                      country: "BY",
                  },
                  {
                      mask: "+{7} 000 000-00-00", // Россия
                      startsWith: "7",
                      country: "RU",
                  },
                  {
                      mask: "+{48} 000-000-000", // Польша
                      startsWith: "48",
                      country: "PL",
                  },
                  {
                      mask: "+0000000000000", // fallback
                  },
                  ]}
                  dispatch={(appended, dynamicMasked) => {
                  const number = (dynamicMasked.value + appended).replace(/\D/g, "");
                  return dynamicMasked.compiledMasks.find(m => number.startsWith(m.startsWith)) || dynamicMasked.compiledMasks[3];
                  }}
                  definitions={{ '0': { mask: /[0-9]/ } }}
                  lazy={false}
                  overwrite={true}
                  placeholder={isPhoneFocused ? "+" : "Телефон* (начиная с +)"}
                  value={formData.phone || ""}
                  onAccept={(value) => {
                  const cleanValue = value.replace(/[^\d+]/g, "");
                  setFormData({ ...formData, phone: cleanValue });
                  }}
                  onFocus={() => setIsPhoneFocused(true)}
                  onBlur={(e) => {
                  if (!e.target.value || e.target.value === "+") {
                      setFormData({ ...formData, phone: "" });
                      setIsPhoneFocused(false);
                  }
                  }}
                  className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-[#15419E]"
                  } rounded-full p-3 text-sm`}
              />
              <p className="text-xs text-gray-500 pl-3">Международный формат: +375, +7, +48</p>
              {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 pl-3">{errors.phone}</p>
              )}
              </div>
                <div className="mb-1">
                  <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#15419E] rounded-full p-2"
                  />
                </div>
                <div className="flex items-center mt-5 mb-5">
                  <input
                      type="checkbox"
                      id="agreement"
                      checked={isAgreed}
                      onChange={handleCheckboxChange}
                      className="mr-2 accent-[#F86F00]"
                  />
                  <label htmlFor="agreement" className="text-sm">
                    Я согласен с{" "}
                    <a
                        href="/Публичная оферта. Компания VISA VAM.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#F86F00]"
                    >
                      Публичной офертой
                    </a>
                  </label>
                </div>
                {errors.agreement && (
                    <p className="text-red-500 text-sm mt-1 mb-4">{errors.agreement}</p>
                )}
                <div className="flex justify-center">
                  <button
                      type="submit"
                      className={`py-3 px-4 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] w-[220px] active:scale-95 transition-transform duration-150 ease-in-out ${
                          isSubmitting
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-customBlue hover:bg-blue-700 text-white"
                      }`}
                      disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? "Отправка..." : "Оформить заявку"}
                  </button>
                </div>
              </form>
          )}
        </div>
      </div>
  );
};

export default Modal;