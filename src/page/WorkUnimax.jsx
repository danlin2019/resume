import WorkList from "./index/WorkList";
import { useEffect } from "react";
import workMp4 from "../assets/unimax_video.mp4";

function WorkUnimax() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300);
  }, []);
  return (
    <>
      <div className="article-contet">
        <h2>官網：UNIMAX MEDICAL SYSTEMS INC.</h2>
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
          <span>Fullpage</span>
          <span>CountUp</span>
        </div>
        <div>
          Unimax Meds
          官網以專業、科技感的設計為核心，此案不同於傳統版面，使用斜角三角形來做切版。網站採用
          Fullpage.js 製作全頁滾動換頻效果，當換到該頻時該區的內容浮現。運用
          CountUp.js 數字跑動的效果呈現數據。
        </div>
        <br />

        <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
        <div>
          <a
            className="hover:text-regal-orange transition duration-300"
            href="https://www.unimaxmeds.com/"
            target="_blank"
          >
            https://www.unimaxmeds.com/
          </a>
        </div>
        <br />
        <div className="mb-10">
          <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
          <ul className="list-disc pl-7 mb-6">
            <li>響應式設計，RWD切版</li>
            <li>
              使用 Fullpage.js
              來做換頻，帶來流暢的滾動體驗，結合動畫讓內容展示更有層次感
            </li>
            <li>使用 CountUp.js 動態展示關鍵數據</li>
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
      <WorkList />
    </>
  );
}

export default WorkUnimax;
