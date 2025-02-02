
import workImg1 from "../assets/10_skis.jpg";
import workImg2 from "../assets/10_skis_1.png";
import WorkList from "./index/WorkList";
import { useEffect } from "react";



function WorkSkis() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>WEB View：新光證券 - 智慧選</h2>
          <img src={workImg1}  className="mb-4"/>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>Javascript</span>
            <span>HTML</span>
            <span>SCSS</span>
            <span>Swiper</span>
          </div>
          <div>
          此專案主要模擬使用者在 App 中操作投資流程的情境，將完成的操作邏輯與介面交由後端進行整合。整體流程包含五個步驟，使用者需依序進行選擇，最後將所有參數帶到結果頁模擬送出後的狀況。同時，支援隨時返回上一步修改選項的功能，提升操作的靈活性與便利性。
          </div>
          <br />
        
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          <div className="break-words">
            <h4>官網</h4>
            <a className="hover:text-regal-orange transition duration-300" href="https://www.skis.com.tw/n/RQSmart/RQSmart.html" target="_blank">https://www.skis.com.tw/n/RQSmart/RQSmart.html</a>

            <h4 className="mt-3">APP模擬流程</h4>
            <a className="hover:text-regal-orange transition duration-300" href="http://www.danportfolio.url.tw/skis/step.html" target="_blank">http://www.danportfolio.url.tw/skis/step.html</a>
          </div>
          <br />
          <div className="mb-10">

            <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">步驟流程：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>挑選產業概念股，然後按「下一步」</li>
              <li>使選擇標的類型（如 ETF），然後按「下一步」</li>
              <li>配息間隔，然後按「下一步」</li>
              <li>績效推薦排序，然後按「下一步」</li>
              <li>最後選擇績效區間，按「完成」結束操作</li>
              <li>使用者可在操作過程中隨時點擊「上一步」修改之前的選項</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">參數傳遞至結果頁面：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>當使用者完成所有步驟並按「完成」時，會將選擇的參數透過網址參數帶至結果頁面，例如<br/>http://www.danportfolio.url.tw/skis/step.html?concept=全部&target=ETF&interval=不指定&ranking=holdercnt&range=1</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">結果頁面篩選：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>結果頁包含五個下拉選單來模擬篩選操作，對應的選項如下</li>
              <li>產業概念股</li>
              <li>標的類型</li>
              <li>配息間隔</li>
              <li>績效區間</li>
              <li>指標排序</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">篩選結果展示：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>根據篩選條件，動態顯示符合條件的股票列表</li>
            </ul>
            <div>
              <img src={workImg2}/>
            </div>
          </div>
          <div>
            <div className="w-full text-center">
              <button className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300" onClick={()=>window.history.go(-1)}>回上一頁</button>
            </div>
          </div>
      </div>
      <WorkList />
    </>
  )
};

export default WorkSkis;
