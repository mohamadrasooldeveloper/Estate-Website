import React from "react";
import styles from "@/styles/Feature.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faBarChart,
  faGlobe,
  faKey,
  faLock,
  faMapMarker,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function Features() {
  return (
    <div className={styles.features}>
           <div className={styles.feature}>
           <span className={styles.feature__icon}>
          {/* <i className="fa fa-globe"></i> */}
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <h4 className={styles["u-heading--dark"]}>بهترین خانه های لوکس جهان</h4>        
        <p className={styles["u-paragraph"]}>
          نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان
          وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد
          کردند
        </p>
      </div>

           <div className={styles.feature}>
 <span className={styles.feature__icon}>          {/* <i className="fa fa-map-marker"></i> */}
          <FontAwesomeIcon icon={faMapMarker} />
        </span>
        <h4 className={styles["u-heading--dark"]}>همه خانه ها در مکان های برتر</h4>
 <p className={styles["u-paragraph"]}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
           <div className={styles.feature}>
         <span className={styles.feature__icon}>
          {/* <i className="fa fa-key"></i> */}
          <FontAwesomeIcon icon={faKey} />
        </span>
        <h4 className={styles["u-heading--dark"]}>خانه جدید در یک هفته</h4>
         <p className={styles["u-paragraph"]}>
          ز آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
          معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان
          دهند که قالب طراحی شده
        </p>
      </div>
           <div className={styles.feature}>
         <span className={styles.feature__icon}>
          {/* <i className="fa fa-bar-chart-o"></i> */}
          <FontAwesomeIcon icon={faBarChart} />
        </span>
       <h4 className={styles["u-heading--dark"]}>فقط بهترین خواص</h4>
         <p className={styles["u-paragraph"]}>
          تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه
          متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در
          نظر گرفته شده است.
        </p>
      </div>
           <div className={styles.feature}>
         <span className={styles.feature__icon}>
          {/* <i className="fa fa-lock"></i> */}
          <FontAwesomeIcon icon={faLock} />
        </span>
        <h4 className={styles["u-heading--dark"]}>پرداخت های ایمن در بعدی</h4>
       <p className={styles["u-paragraph"]}>
          ر نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال
          متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان
          بر خواهد بود.
        </p>
      </div>
           <div className={styles.feature}>
         <span className={styles.feature__icon}>
          {/* <i className="fa fa-trophy"></i> */}
          <FontAwesomeIcon icon={faTrophy} />
        </span>
        <h4 className={styles["u-heading--dark"]}>1% مشاوران املاک برتر</h4>
         <p className={styles["u-paragraph"]}>
          همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد
          طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
        </p>
      </div>
    </div>
  );
}

export default Features;
