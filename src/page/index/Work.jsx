import { useState } from "react";
import { Link} from "react-router-dom";
import { PROJECT_LIST } from "../../constant";

const Work = () => {
  // 狀態管理：控制顯示的項目數量
  const [visibleCount, setVisibleCount] = useState(4);
  const isShowAll = visibleCount >= PROJECT_LIST.length;

  const handleShowMore = () => {
    setVisibleCount(PROJECT_LIST.length) // 顯示所有項目
  };

  return (
    <>
      <h2 className="text-[9vw] lg:text-[4.5vw] leading-[7rem] font-[900] text-regal-blue text-center lg:mb-16">
        WORKS
      </h2>
      <div className="in-work flex flex-wrap">
        {PROJECT_LIST.slice(0, visibleCount).map((project) => (
          <div key={project.id} className={`w-list group ${project.className}`}>
            <Link to={project.link}>
              <div className="img-photo">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="works-text">
                <h3 className="lg:text-[1.4vw] opacity-0 group-hover:opacity-100 text-center leading-normal" dangerouslySetInnerHTML={{ __html: project.description }}></h3>
                {project.tag && <div className="work-content">
                  <div>
                    <ul className="tag">
                      { Array.isArray(project.tag) &&
                        project.tag.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                  {project.content}
                  <div className="w-full mt-12 ">
                    <span className=" text-white rounded-[99em] py-2 px-12 bg-regal-orange hover:opacity-85 transition duration-300">More</span>
                  </div>
                </div>}

              </div>
            </Link>
          </div>
        ))}
      </div>
      {!isShowAll && (
        <div className="w-full text-center my-16 lg:mb-36">
          <button
            onClick={handleShowMore}
            className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300"
          >
            看更多作品
          </button>
        </div>
      )}
    </>
  );
};

export default Work;
