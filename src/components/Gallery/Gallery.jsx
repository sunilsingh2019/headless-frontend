export const Gallery = ({imageList}) => {
    var listVals = [];
      
 for (var i = 0; i < imageList.image_lisit; i++) {
     listVals.push( imageList['image_lisit_' + i + '_image'])
 }

    return (
        <>
        {listVals?.length ? (
        <div className="services-details-area pt-140 pb-105">
          <div className="container">
            <div className="row">
            {listVals?.map(image_lisit => (
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="services-sm-image w-img mb-45">
                  <img src={image_lisit?.url} alt={image_lisit?.title} />
                </div>
              </div>
             ))} 
            </div>
          </div>
        </div>
        ) : null}
      </>
    )
}

