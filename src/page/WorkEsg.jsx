import WorkList from "./index/WorkList";
import { useEffect } from "react";
import workMp4 from "../assets/esg_video.mp4";

function WorkEsg() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300);
  }, []);
  return (
    <>    
      <div className="article-contet">
          <h2>
          官網：麗明營造ESG永續網站
        </h2>
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
          <span>SCSS</span>
          <span>Gsap</span>
          <span>Svg animation</span>
          <span>countUp.js</span>
        </div>
        <div>
          以永續發展（ESG）為核心理念，網站在首頁的 KV
          中加入建築物跑線效果，增添視覺的層次，吸引使用者目光。平台提供企業與個人了解並參與永續行動的機會，結合簡約大氣的設計與高效的功能，清晰介紹
          ESG
          的重要性與實踐方式。透過滑鼠滾動觸發的動態動畫設計，增強與使用者的互動感，為其帶來直觀且沉浸式的瀏覽體驗。
        </div>
        <br />

        <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
        <div>
          <a
            className="hover:text-regal-orange transition duration-300"
            href="https://esg.best-giving.com.tw/"
            target="_blank">https://esg.best-giving.com.tw/
          </a>
        </div>
        <br />
        <div className="mb-10">
          <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
          <ul className="list-disc pl-7 mb-6">
            <li>響應式設計，RWD切版</li>
            <li>
              使用 CSS 的 stroke-dasharray 和
              stroke-dashoffset，結合動畫時間差，實現 KV 中建築物的動態跑線效果
            </li>
            <li>所有頁面的動態效果均由 Gsap 控制，確保動畫流暢且節奏一致</li>
          </ul>

        </div>
        <div>
          <div className="w-full text-center">
            <button
              className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300"
              onClick={() => window.history.go(-1)}
            >
              回上一頁
            </button>
          </div>
        </div>
      </div>
      <WorkList/>
    </>
  );
}

export default WorkEsg;
