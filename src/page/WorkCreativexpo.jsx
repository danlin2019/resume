import WorkList from "./index/WorkList";
import workMp4 from "../assets/04_pahbin.png";
import img1 from "../assets/04_pahbin_1.png";

import { useEffect } from "react";



function WorkCreativexpo() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>官網：臺灣文化創意博覽會</h2>
          <div className="w-full m-auto mb-4">
          <img src={workMp4}  className="mb-4"/>
       
          </div>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>Javascript</span>
            <span>Blade</span>
            <span>GSAP</span>
            <span>Swiper</span>
            <span>SCSS</span>
            <span>Axios</span>
          </div>
          <div>
          本專案的前端部分以 Blade 模板進行切版，後端負責串接與整合，頁面大多以靜態內容為主。在首頁設計中，展會內容結合 GSAP 製作至 視差滾動 效果，增強了頁面的動態視覺效果，提升使用者的瀏覽體驗。首頁活動區塊使用了 Swiper 製作，實現了流暢的滑動互動，為使用者提供了直觀且友好的瀏覽體驗。
          </div>
          <br />
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          <div>
            <a className="hover:text-regal-orange transition duration-300" href="https://creativexpo.tw/" target="_blank">https://creativexpo.tw/</a>
          </div>
          <br />
          <div className="mb-10">

            <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
            <ul className="list-disc pl-7 mb-6">
              <li>HTML RWD 切版：實現響應式設計，提供跨裝置的流暢體驗</li>
              <li>GSAP 視差滾動：為首頁展會內容增添動態效果，提升視覺吸引力</li>
            </ul>
            <img src={img1} alt="" />
          </div>
         
          <div>
            <div className="w-full text-center">
              <button className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300" onClick={()=>window.history.go(-1)}>回上一頁</button>
            </div>
          </div>
      </div>
      <WorkList/>
    </>
  )
};

export default WorkCreativexpo;
