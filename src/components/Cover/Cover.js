
export const Cover = ({children, background}) => {
  return (
     <div>
      <div className="tp-photograper-portfolio p-relative" style={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
        <div className="container">
            <div className="col-xl-12">
              {children}
            </div>
        </div>
      </div>
   </div>
  );
}