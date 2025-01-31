import React from 'react'
import Style from "@/styles/Story.module.css"
import Link from 'next/link'
export default function Story() {
  return (
    <div className={Style.Content}>
    <div className={Style.Story}>
        <div className={Style.Story__picture}>
          <img className={Style.image} src="/img/story-1.jpeg" alt="story" />
          <img className={Style.image2} src="/img/story-2.jpeg" alt="story" />
        </div>
      
    </div>
        <div className={Style.Story__main}>
            <h3>مشتریان خوشحال            </h3>
            <h2>”بهترین تصمیم زندگی ما“</h2>
            <p>متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن</p>
            <button className={Style.btn}>
          <Link href="/">
            خانه خود را پیدا کنید
          </Link>
        </button>
        </div>
        </div>
  )
}
