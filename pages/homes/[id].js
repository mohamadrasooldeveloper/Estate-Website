import { useRouter } from "next/router";
import Image from "next/image";
import Style from "@/styles/HomeId.module.css";
import db from "./../../data/db.json";

export async function getStaticProps({ params }) {
  const homeID = params.id;
  const foundHome = db.homes.find((home) => home.id === Number(homeID));

  if (!foundHome) {
    return {
      props: {
        home: null,
      },
    };
  }

  return {
    props: {
      home: foundHome || null, 
    },
  };
}

export async function getStaticPaths() {
  const paths = db.homes.map((home) => ({
    params: { id: home.id.toString() },
  }));

  return {
    paths,
    fallback: true, 
  };
}

export default function HomeDetails({ home }) {

  const router = useRouter();

  if (router.isFallback || !home) {
    return <p className={Style.Error}>ملک مورد نظر یافت نشد...</p>;
  }

  return (
    <div className={Style.home_details}>
      <div className={Style.home__details_top}>
        <div className={Style.home_img}>
          <Image
            src={home?.img}
            alt={home?.title}
            layout="intrinsic"
            width={500}
            height={300}
            quality={75}
          />
        </div>
        <div className={Style.home__interduce}>
          <div className={Style.home_title}>
            <h1>
              <span>{home?.title}</span>
              <span>{home?.price.toLocaleString()} تومان</span>
            </h1>
            <div className={Style.tags}>
              <span className={Style.green_tag}>ویژه</span>
              <span className={Style.brown_tag}>اجاره</span>
            </div>
            <div className={Style.adrress}>آدرس : شیراز، میدان ارم</div>
          </div>
          <div className={Style.home_review}>
            <div className={Style.home__review_top}>
              <h2>مرور کلی</h2>
              <p>
                <span>کد ملک : </span>
                <span>{home?.code}</span>
              </p>
            </div>
            <hr className={Style.HomeDetails__line}></hr>
            <ul className={Style.home__review_bottom}>
              <li>
                <span>نوع ملک: </span>
                <span>{home?.title}</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{home?.roomCount}</span>
              </li>
              <li>
                <span>متراژ: </span>
                <span>{home?.meterage}</span>
              </li>
              <li>
                <span>سال ساخت: </span>
                <span>1402</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.home__details_bottom}>
        <div className={Style.home__details_description}>
          <span className="">توضیحات</span>
          <hr className={Style.HomeDetails__line}></hr>
          <p className="">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. مشاوران دوطرفه به خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک وظیفه دارد که با صداقت به هر دو طرف معامله مشاوره و راهنمایی درستی بدهد. مشاوران دوطرفه باید از هر دو طرف چه فروشنده و چه خریدار بخواهند که یک قرارداد نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی برای مشاوران دوطرفه وجود دارد، این دست از مشاوران نسبت به دو دسته قبل کارشان سخت‌تر و پیچیده‌تر است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است          </p>
        </div>
      </div>
    </div>
  );
}
