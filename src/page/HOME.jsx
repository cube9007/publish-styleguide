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
          <h2> 📚  Layout </h2>
          <ul>
            <li>
              <h3>Product</h3>
            </li>
            <li>
              <Link to="/page/layout/product/Dropdown" className="home-a"> 🔗 Dropdown (상단 내비게이션 드롭다운 메뉴) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/product/Sidemenu" className="home-a"> 🔗 SideMenu (=한국관광공사) </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
          <ul>
            <li>
              <h3>Website</h3>
            </li>
            <li>
              <Link to="/page/layout/website/NormalLayout" className="home-a"> 🔗 일반 레이아웃 (상단바 + 사이드 메뉴) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenFadeBanner" className="home-a"> 🔗 자동 페이드 배너 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenSlideBanner" className="home-a"> 🔗 자동 슬라이드 배너 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenSlideButtonBanner" className="home-a"> 🔗 수동 슬라이드 배너 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/layout/website/HorizenAutoAndBtnSlideBanner" className="home-a"> 🔗 자동 + 수동 슬라이드 배너 </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>

          <Divider style={{ margin: '50px 0 50px 0' }}/>

          <h2> 📒 StyleGuide </h2>
          <ul>
            <li >
              <Link to="/page/styleguide/LogIn" className="home-a">  🔗 로그인 LogIn</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Album" className="home-a">  🔗 앨범 Album</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/TextField" className="home-a">  🔗 텍스트 필드 TextField </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/ToggleButton" className="home-a">  🔗 토글 버튼 Toggle Button </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Switch" className="home-a">  🔗 스위치 Switch </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Loading" className="home-a">  🔗 로딩 Loading </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/LoadingProgressCircle" className="home-a">  🔗 로딩 원 모양 LoadingProgressCircle </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/LoadingProgressLinear" className="home-a">  🔗 로딩 줄 모양 LoadingProgressLinear </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Date" className="home-a">  🔗 날짜 / 시간 선택기Date / Time Picker </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/DateRange" className="home-a">  🔗 날짜 범위 선택기 Date Range Picker </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/ButtonPage" className="home-a">  🔗 버튼 Button </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/MotionDiv" className="home-a">  🔗 움직이는 버튼 Motion.div</Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Select" className="home-a">  🔗 선택 Select </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/NoData" className="home-a">  🔗 검색결과 없음 NoData </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Tabs" className="home-a">  🔗 탭 Tabs </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/CardPage" className="home-a">  🔗 카드 Card </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Masonry" className="home-a">  🔗 벽돌 카드 Masonry (핀터레스트 스타일 레이아웃) </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Location" className="home-a">  🔗 맨 위로 버튼 Location </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/BreadCrumbs" className="home-a">  🔗 브레드크럼즈 BreadCrumbs </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
              <Link to="/page/styleguide/Fontcolor" className="home-a">  🔗 글자 색상 FontColor</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to="/page/styleguide/Materialicons" className="home-a"> 🔗 머티리얼 아이콘 Material Icons</Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  