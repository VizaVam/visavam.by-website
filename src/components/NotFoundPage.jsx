const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="lg:text-[180px] text-[132px] font-bold">404</h1>
      <p className="text-2xl mt-2">Здесь ничего нет...</p>
      <p className="text-xl mt-2">Возможно страница была удалена или перенесена на другой адрес</p>
      <a href="/" className="mt-4 px-6 py-3 bg-customBlue text-white rounded-[2px] hover:bg-blue-600">
        Вернуться на главную
      </a>
    </div>
  );
};

export default NotFoundPage;
