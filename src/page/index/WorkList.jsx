import { useState } from "react";
import { Link} from "react-router-dom";
import { PROJECT_LIST } from "../../constant";

const WorkList = () => {
  // 狀態管理：控制顯示的項目數量



  return (
    <>
      <h2 className="text-[9vw] lg:text-[2.5vw] leading-[7rem] font-[900] text-regal-blue text-center lg:mb-3">
        看其他作品
      </h2>
      <div className="pro-list flex flex-wrap">
        {PROJECT_LIST.map((project) => (
          <div key={project.id} className={`w-list group ${project.className}`}>
            <Link to={project.link}>
              <div className="img-photo">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="works-text">
                <h3 className="lg:text-[1.2vw] opacity-0 group-hover:opacity-100 text-center leading-normal" dangerouslySetInnerHTML={{ __html: project.description }}></h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </>
  );
};

export default WorkList;
