import { Link } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

function home () {
    return (
      <>
        <div className="big-div">
          <h1 > Nextre UI Style Guide </h1>
        </div>
        <Box className="home-box">
          <h2> π  Layout </h2>
          <ul>
            <li>
              <h3>Product</h3>
            </li>
            <li>
              <Link to="/page/layout/product/Dropdown" className="home-a"> π Dropdown (μλ¨ λ΄λΉκ²μ΄μ λλ‘­λ€μ΄ λ©λ΄) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/product/Sidemenu" className="home-a"> π SideMenu (=νκ΅­κ΄κ΄κ³΅μ¬) </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
          <ul>
            <li>
              <h3>Website</h3>
            </li>
            <li>
              <Link to="/page/layout/website/NormalLayout" className="home-a"> π μΌλ° λ μ΄μμ (μλ¨λ° + μ¬μ΄λ λ©λ΄) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenFadeBanner" className="home-a"> π μλ νμ΄λ λ°°λ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenSlideBanner" className="home-a"> π μλ μ¬λΌμ΄λ λ°°λ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenSlideButtonBanner" className="home-a"> π μλ μ¬λΌμ΄λ λ°°λ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenAutoAndBtnSlideBanner" className="home-a"> π μλ + μλ μ¬λΌμ΄λ λ°°λ </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>

          <Divider style={{ margin: '50px 0 50px 0' }}/>

          <h2> π StyleGuide </h2>
          <ul>
            <li >
              <Link to="/page/styleguide/LogIn" className="home-a">  π λ‘κ·ΈμΈ LogIn</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Album" className="home-a">  π μ¨λ² Album</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/TextField" className="home-a">  π νμ€νΈ νλ TextField </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/ToggleButton" className="home-a">  π ν κΈ λ²νΌ Toggle Button </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Switch" className="home-a">  π μ€μμΉ Switch </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Loading" className="home-a">  π λ‘λ© Loading </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/LoadingProgressCircle" className="home-a">  π λ‘λ© μ λͺ¨μ LoadingProgressCircle </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/LoadingProgressLinear" className="home-a">  π λ‘λ© μ€ λͺ¨μ LoadingProgressLinear </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Date" className="home-a">  π λ μ§ / μκ° μ νκΈ°Date / Time Picker </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/DateRange" className="home-a">  π λ μ§ λ²μ μ νκΈ° Date Range Picker </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/ButtonPage" className="home-a">  π λ²νΌ Button </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/MotionDiv" className="home-a">  π μμ§μ΄λ λ²νΌ Motion.div</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Select" className="home-a">  π μ ν Select </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/NoData" className="home-a">  π κ²μκ²°κ³Ό μμ NoData </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Tabs" className="home-a">  π ν­ Tabs </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/CardPage" className="home-a">  π μΉ΄λ Card </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Masonry" className="home-a">  π λ²½λ μΉ΄λ Masonry (νν°λ μ€νΈ μ€νμΌ λ μ΄μμ) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Location" className="home-a">  π λ§¨ μλ‘ λ²νΌ Location </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/BreadCrumbs" className="home-a">  π λΈλ λν¬λΌμ¦ BreadCrumbs </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Fontcolor" className="home-a">  π κΈμ μμ FontColor</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/styleguide/Materialicons" className="home-a"> π λ¨Έν°λ¦¬μΌ μμ΄μ½ Material Icons</Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  