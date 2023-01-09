export const ProjectIntro = ({heading, listItem, banner }) => {
     //first loop
  const number = listItem.list;
  const table = [...Array(number)];
    return (
        <>
        <div className="project-details-area pt-140 pb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="aboutme-image mb-40">
                  <img className="b-radius" src={banner.url} alt={banner.alt} />
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="aboutme-wrapper mb-40">
                  <div className="aboutme-content">
                    <h3 className="tpabout-xd-title mb-50">{heading}</h3>
                  </div>
                  <div className="aboutme-feature-list mt-25">
                    <ul>
                    {table.map((_, index) => {
                       const listHeading = `list_${index}_heading`;
                       const listDescription = `list_${index}_description`;
                       return (
                      <li><p>{listItem[listHeading]}<a href="#"> {listItem[listDescription]}</a></p></li>
                      );
                    })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

