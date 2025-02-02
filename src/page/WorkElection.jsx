import WorkList from "./index/WorkList";
import workImg2 from "../assets/02_president.jpg";
import workpresidentImg1 from "../assets/02_president_1.png";
import workpresidentImg2 from "../assets/02_president_2.png";
import { useEffect } from "react";


function WorkElection() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, [])
  return (
    <>
      <div className="article-contet">
          <h2>專案：2024總統立委大選即時開票</h2>
          <img src={workImg2}  className="mb-4"/>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>Vue</span>
            <span>D3.js</span>
            <span>SCSS</span>
            <span>Axios</span>
          </div>
          <div>
          這專案的需求是能夠即時獲取選舉數據並將其視覺化呈現。讓使用者能夠快速掌握開票進度與結果，即時地查看候選人的得票情況、各縣市的開票狀況。每 60 秒定期從 API 獲取最新選票數據，確保使用者看到的是最即時的開票結果。
          <br/>
          右側地圖使用 Taiwan.TopoJSON，結合 D3.js 將地圖組合並渲染至前端，實現互動式開票結果展示。
          <br/>
          <br/>
          網站整合了前端的互動性與後端的數據處理，為使用者提供直觀、便捷的方式追蹤總統與立委選舉的最新動態。
          </div>
          <br />
        
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          <div>
            <a className="hover:text-regal-orange transition duration-300" href="https://www.thenewslens.com/election/2024/president/" target="_blank">https://www.thenewslens.com/election/2024/president/</a>

          </div>
          <br />
          <div className="mb-10">

            <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">互動展示：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>左側選單可選擇縣市與區域查看詳細選舉資訊</li>
              <li>左側選項與右側地圖動態連動</li>
              <li>地圖支持放大、縮小、拖曳，方便瀏覽</li>
              <li>滑鼠懸停於地圖上可顯示詳細的即時數據</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">多語系與分享功能：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>中、英、日三種語言切換</li>
              <li>提供分享功能，允許用戶複製網址並分享當前畫面</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">總統與立委選舉的多層次展示：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>總統頁面：即時統計候選人得票數，並視覺化得票比例</li>
              <li>立委＆不分區立委頁面：顯示各選區候選人得票數，並提供選區地圖分布</li>
              <li>原住民立委：包括山地與平地原住民兩類，分別展示得票數據與當選名單</li>
              
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">API 數據處理：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>使用 Axios 與後端 API 串接，60秒定期更新選舉數據</li>
            </ul>
            <div>
              <img src={workpresidentImg1} alt="" />
              <img src={workpresidentImg2} alt="" />
            </div>
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

export default WorkElection;
