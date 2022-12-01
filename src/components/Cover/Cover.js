
export const Cover = ({children, background}) => {
  return (
     <div>
      <div className="tp-photograper-portfolio p-relative" style={{backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
        <div>{children}</div>
      </div>
   </div>
  );
}