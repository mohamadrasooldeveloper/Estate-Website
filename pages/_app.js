import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <div className="container">
    <div class="Sidebar">
  <input type="checkbox" id="sidebar__input" class="sidebar__input" />
  <label for="sidebar__input" class="sidebar__label">
    <div class="Sidebar_menu"></div>
  </label>
  <div className="Sidebar_bg"></div>
  <ul className="Sidebar__list">
    <li className="Sidebar__item">
      <a href="index_html" className="item_link">
      صفحه اصلی

      </a>
    </li>
    <li className="Sidebar__item">
      <a href="index_html" className="item_link">
      ویژگی ها

      </a>
    </li>
    <li className="Sidebar__item">
      <a href="index_html" className="item_link">
      نظرات
      </a>
    </li>
    <li className="Sidebar__item">
      <a href="index_html" className="item_link">
            خانه

      </a>
    </li>
    <li className="Sidebar__item">
      <a href="index_html" className="item_link">
      گالری
      </a>
    </li>
  </ul>
    </div>
     
     <Component {...pageProps} />
     <header className="header">
      <div className="header__right">
        <div className="header__right-main">
        <img src="/img/logo.png" alt="Nexter Logo" className="header__logo" />
      <h4>خانه خودتان:</h4>
        <h1>با خرید خانه نهایت آزادی را احساس کنید        </h1>
        <a className="btn" href="/homes">املاک مارا مشاهده کنید</a>
        <p className="seeon__text">دیده می شود در</p>
        <figure className="seeon__box">
          <img src="/img/logo-bbc.png" alt="home" className="seeon__img"/>
          <img src="/img/logo-bi.png" alt="home" className="seeon__img"/>
          <img src="/img/logo-forbes.png" alt="home" className="seeon__img"/>
          <img src="/img/logo-techcrunch.png" alt="home" className="seeon__img"/>
        </figure>
        </div>
      </div>
     </header>
     <div className="real-tors">
  <p className="real-tors__text">سه مالک برتر</p>
  <div className="real-tors__list">
    <div className="real-tors__menu">
    <img src="/img/realtor-1.jpeg" alt="مهدی ایلخانی نسب" />
    <div className="real-tors__main">
      <h3>مهدی ایلخانی نسب</h3>
      <p>869 فروش خانه</p>
    </div>
      
    </div>
    <div className="real-tors__menu">
    <img src="/img/realtor-2.jpeg" alt="کوثر بهشتی" />
    <div className="real-tors__main">
      <h3>کوثر بهشتی</h3>
      <p>243 فروش خانه</p>
    </div>
      
    </div>
    <div className="real-tors__menu">
    <img src="/img/realtor-3.jpeg" alt="عرشیا احسنی" />
    <div className="real-tors__main">
      <h3>عرشیا احسنی</h3>
      <p>130 فروش خانه</p>
    </div>
      
    </div>
  </div>
</div>

    </div>

     
  );
}
