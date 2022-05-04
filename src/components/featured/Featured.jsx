import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/685532.webp?k=27f5778aebf08d8894506a031c18df7180c530a0937ad377c2b3ecaa540fe9f7&o="
          alt="Featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 propertiss</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/620027.webp?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o="
          alt="Featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 propertiss</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/619666.webp?k=504b97635641d489438feb63780d4ae80ce8a2fd08a1fcb6183485738a87e6ad&o="
          alt="Featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 propertiss</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
