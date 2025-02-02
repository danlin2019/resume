import WorkList from "./index/WorkList";
import { useEffect } from "react";
import workMp4 from "../assets/deep.mp4";


function WorkDeep() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>官網：道法法律事務所 Deep & Far Attorneys-at-Law</h2>
        <div className="w-full m-auto mb-4">
            <video
              src={workMp4}
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto"
            ></video>
          </div>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>Javascript</span>
            <span>Jquery</span>
            <span>Gsap</span>
            <span>Swiper</span>
            <span>SCSS</span>
            <span>CSS Animate</span>
          </div>
          <div>
          本專案以 動態效果 為核心，目標是打破法律事務所一貫給人的嚴肅死板的印象，為網站注入更多活力與創新。客戶希望透過獨特的動畫與視覺效果，與其他法律事務所網站區分開來，因此在設計上加入了獨特的動畫與視覺效果，透過文字動畫和滾動效果營造視覺衝擊，結合互動功能提升用戶參與感。
          </div>
          <br />
        
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          
          <div>
            <a className="hover:text-regal-orange transition duration-300" href="https://gaze-design.com/dan/deepandfar/" target="_blank">https://gaze-design.com/dan/deepandfar/</a>
          </div>
          <br />
          <div className="mb-10">

            <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">文字動畫：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>將首頁 KV 的文字拆分成單個字元，並隨機排序</li>
              <li>將字元生成 'span' 元素後插入到左右容器中</li>
              <li>動態設置 transform: rotate、left 和 animation-duration 屬性，控制起始位置和動畫速度</li>
              <li>每個字元添加隨機的 class name（如 an-move1～an-move4），以處理文字的淡入淡出動畫</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">CSS Animate：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>天秤的左右搖晃、文字進場、背景光效以及動態煙霧效果，營造出沉浸式體驗，提升網站的視覺吸引力與氛圍感</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">滾動切換效果：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>Kv 使用 Gsap 製作滾動換畫面效果，為用戶提供流暢的滾動體驗</li>
              <li>所有頁面的動態效果均由Gsap觸發，統一動畫節奏</li>
            </ul>

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

export default WorkDeep;
