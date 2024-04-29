const BannerPopupContent = () => {
  return (
    <div className="header_top_banner">
      <div className="top_text">
        <h2 className="top_text_title">energotochka</h2>
        <p>электрические станции под ключ</p>
        <span className="header_top_info">
          Пожалуйста, заполните ниже строки, чтобы мы смогли отправить
          презентацию, а также ответить на все ваши вопросы
        </span>
      </div>
      <div className="inputs_container">
        <div className="field_inputs">

        <input
          type="text"
          className="block w-full px-4 py-2  focus:outline-none focus-outline"
          placeholder="напишите ваше имя"
        />
        <input
          type="text"
          className="block w-full px-4 py-2  focus:outline-none focus-outline"
          placeholder="напишите номер сотового телефона"
        />
        </div>
        <button className="banner_button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Подтвердить
        </button>
        <p className="info">
          нажимая по кнопке, вы соглашаетесь с условиями использования и
          обработки данных
        </p>
      </div>
    </div>
  );
};

export default BannerPopupContent;
