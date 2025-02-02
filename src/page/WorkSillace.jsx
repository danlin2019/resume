import WorkList from "./index/WorkList";
import { useEffect } from "react";
import workMp4 from "../assets/sillce_video.mp4";

function WorkSillace() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300);
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>
          活動：春風 SILLACE-中元有絲嵐 享受五星儀式感
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
        </div>
        <div>
        巧妙結合了中元節的節慶氛圍推廣品牌衛生紙產品。網站以背景色漸變、符號動畫及視差效果營造出濃厚的節日氛圍，全頁動態滾動，讓使用者在瀏覽過程中感受到活動的趣味性與品牌的高品質形象。同時，透過中元節主題內容與促銷活動，吸引更多消費者參與並提升品牌認知度。
        </div>
        <br />

        <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
        <div>
          <a
            className="hover:text-regal-orange transition duration-300"
            href="https://sillace.iprefer.com.tw/"
            target="_blank">https://sillace.iprefer.com.tw/
          </a>
        </div>
        <br />
        <div className="mb-10">
          <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
          <h4 className="font-semibold text-gray-700 mb-2">背景漸變顏色</h4>
          <ul className="list-disc pl-7 mb-6">
            <li>隨著滾動，自動變化頁面背景顏色，根據區塊過渡平滑調整，增添視覺層次感</li>
            <li>KV會有兩Cut切換，並運用煙霧特效象徵「好兄弟」，增添中元節的節慶氛圍</li>
            <li>使用 GSAP 製作頁面動態效果，包括內容進場動畫與滾動觸發的視差效果</li>
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

export default WorkSillace;
