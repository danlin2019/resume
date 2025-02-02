
import workImg1 from "../assets/01_admin.jpg";
import workImg1_detail from "../assets/01_admin_detail.png";
import workImg1_login from "../assets/01_admin_login.jpg";
import workImg1_list from "../assets/01_admin_product_list.jpg";
import workImg1_eidt from "../assets/01_admin_product_eidt.jpg";
import WorkList from "./index/WorkList";
import { useEffect } from "react";


function workShoe() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>專案：鞋子購物車後台系統 & 前台頁面切版串接</h2>
          <img src={workImg1}  className="mb-4"/>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>React</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
            <span>Firebase</span>
            <span>React-loading-skeleton</span>
            <span>React-hook-form</span>
            <span>Axios</span>
          </div>
          <div>
            獨立完成此網頁開發，涵蓋了從功能規劃、資料庫設計到前端設計與配色的完整開發流程。專案使用 React 框架構建前後台，結合 Tailwind CSS 做樣式開發，具備 React 基礎知識，並結合 Firebase 開發 API，使用 Redux Toolkit 進行狀態管理。
          </div>
          <br />
          <h3 className="mb-2 font-bold text-gray-500 text-xl">登入資訊</h3>
          帳號: testadmin@gmail.com
          <br />
          密碼: admin123
          <br />
          <br />
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          <div className="break-words">
            <h4>前台網址</h4>
            <a className="hover:text-regal-orange transition duration-300" href="https://danlin2019.github.io/project-car-web/" target="_blank">https://danlin2019.github.io/project-car-web/</a>

            <h4 className="mt-3">後台網址</h4>
            <a className="hover:text-regal-orange transition duration-300" href="https://danlin2019.github.io/AdminPanel_React/" target="_blank">https://danlin2019.github.io/AdminPanel_React/</a>
          </div>
          <br />
          <div>
            <h3 className="mb-2 font-bold text-gray-500 text-xl">API建立</h3>
            <h4 className="font-semibold text-gray-700 mb-2">後台API</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>新增產品</li>
              <li>取得所有產品列表</li>
              <li>編輯產品</li>
              <li>刪除產品</li>
              <li>取得訂單列表</li>
              <li>取得單一訂單資料</li>
              <li>更新訂單</li>
              <li>刪除訂單</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">前台API</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>建立訂單</li>
              <li>根據產品 ID 取得單一產品資料</li>
            </ul>
            <h3 className="mb-2 font-bold text-gray-500 text-xl">後台功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">帳號登入</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>使用者須輸入帳號與密碼進行後台操作</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">產品管理</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>產品列表瀏覽</li>
              <li>產品搜尋、排序、新增、修改與刪除功能</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">訂單管理</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>瀏覽訂單列表與詳細資訊</li>
              <li>更新訂單狀態</li>
              <li>訂單的刪除操作</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">銷量數據</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>顯示所有、每週、每月銷量統計圖表</li>
            </ul>
            <div>
              <img className="mb-5" src={workImg1_login}/>
              <img className="mb-5" src={workImg1_list}/>
              <img className="mb-10" src={workImg1_eidt}/>
            </div>
            <h3 className="mb-2 font-bold text-gray-500 text-xl">前台功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">頁面切版</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>響應式設計，RWD切版</li>
              <li>產品列表頁顯示所有產品資訊</li>
              <li>點擊產品進入產品詳細頁查看詳情</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">購物車功能</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>產品加入購物車</li>
              <li>確認購物車頁面</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">訂單處理</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>填寫訂單表單並完成購買流程</li>
            </ul>
          </div>
          <div>
            <img className="mb-10" src={workImg1_detail}/>
            <div className="w-full text-center">
              <button className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300" onClick={()=>window.history.go(-1)}>回上一頁</button>
            </div>
          </div>
      </div>
      <WorkList/>
    </>
  )
};

export default workShoe;
