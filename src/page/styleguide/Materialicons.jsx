import * as React from 'react';
import { Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { 
        //공통 UI
        Assessment,
        Dvr,
        Widgets, 
        NotificationsNone, 
        Ballot, 
        Notifications, 
        HeadsetMic,
        PersonOutline,
        PermContactCalendar,
        StarRate,
        SupervisorAccount,
        ExitToApp,
        Settings,
        Search,
        Cached,
        KeyboardArrowDown,
        Today,
        KeyboardArrowUp,
        Clear,
        // 콘텐츠 관리
        Title,
        Create,
        EventNote,
        NearMe,
        LocalOffer,
        RadioButtonChecked,
        Attachment,
        Phone,
        AccessTime,
        Loyalty,
        ArrowDropDown,
        CreateNewFolder,
        ClearAll,
        Email,
        Timelapse,
        DateRange,
        GroupWork,
        CheckBox,
        InsertLink,
        EventAvailable,
        LocationOn,
        SwapHoriz,
        DeviceHub,
        DoneAll,
        Image,
        Event,
        LooksTwo,
        Code,
        Extension,
        BurstMode,
        ToggleOff,
        //icon btn
        Highlight,
        DeleteSweep,
        Cancel,
        NavigateBefore,
        Restore,
        NoteAdd,
        OfflinePin,
        KeyboardTab,
        DesktopAccessDisabled,
        SystemUpdateAlt,
        NavigateNext,
        Check,
        Help,
        DeleteOutline,
        Error,
        ControlPoint,
        } 
from "@material-ui/icons";

const Materialicons = () => {
    return (
      <>
        <div className="big-div">
            <h1>
                <Link to="/" > RMS </Link>
            </h1>
        </div>
        <div className="common-box">
          <h3> 공통 UI </h3>
          <Box className='common-box2' p='50px 50px' alignItems='center' flexWrap='wrap'>
            <div className="icon-div"> <Assessment className='m-icon'/> <p className='common-p2'> Assessment </p> </div>
            <div className="icon-div"> <Dvr className='m-icon'/> <p className='common-p2'> Dvr </p> </div>
            <div className="icon-div"> <Widgets className='m-icon'/> <p className='common-p2'> Widgets </p> </div>
            <div className="icon-div"> <NotificationsNone className='m-icon'/> <p className='common-p2'> NotificationsNone </p> </div>
            <div className="icon-div"> <Ballot className='m-icon'/> <p className='common-p2'> Ballot </p> </div>
            <div className="icon-div"> <Notifications className='m-icon'/> <p className='common-p2'> Notifications </p> </div>
            <div className="icon-div"> <HeadsetMic className='m-icon'/> <p className='common-p2'> HeadsetMic </p> </div>
            <div className="icon-div"> <PersonOutline className='m-icon'/> <p className='common-p2'> PersonOutline </p> </div>
            <div className="icon-div"> <PermContactCalendar className='m-icon'/> <p className='common-p2'> PermContactCalendar </p> </div>
            <div className="icon-div"> <StarRate className='m-icon'/> <p className='common-p2'> StarRate </p> </div>
            <div className="icon-div"> <SupervisorAccount className='m-icon'/> <p className='common-p2'> SupervisorAccount </p> </div>
            <div className="icon-div"> <ExitToApp className='m-icon'/> <p className='common-p2'> ExitToApp </p> </div>
            <div className="icon-div"> <Settings className='m-icon'/> <p className='common-p2'> Settings </p> </div>
            <div className="icon-div"> <Search className='m-icon'/> <p className='common-p2'> Search </p> </div>
            <div className="icon-div"> <Cached className='m-icon'/> <p className='common-p2'> Cached </p> </div>
            <div className="icon-div"> <KeyboardArrowDown className='m-icon'/> <p className='common-p2'> KeyboardArrowDown </p> </div>
            <div className="icon-div"> <Today className='m-icon'/> <p className='common-p2'> Today </p> </div>
            <div className="icon-div"> <KeyboardArrowUp className='m-icon'/> <p className='common-p2'> KeyboardArrowUp </p> </div>
            <div className="icon-div"> <Clear className='m-icon'/> <p className='common-p2'> Clear </p> </div>
          </Box>
        </div>
        <div className="common-box">
          <h3> 콘텐츠 관리 </h3>
          <Box className='common-box3' p='50px 50px' >
            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-title'> <Title style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'>텍스트 </p>
                <p className='icon-p'>(title) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-create'> <Create style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 에디터 </p>
                <p className='icon-p'>(Create) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-event_note'> <EventNote style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 기간 </p>
                <p className='icon-p'>(EventNote) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-near_me'> <NearMe style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 지도검색 </p>
                <p className='icon-p'>(NearMe) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-local_offer'> <LocalOffer style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 태그(표준) </p>
                <p className='icon-p'>(LocalOffer) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-radio_button_checked'> <RadioButtonChecked style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 단일선택 </p>
                <p className='icon-p'>(RadioButtonChecked) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-attachment'> <Attachment style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 첨부파일 </p>
                <p className='icon-p'>(Attachment) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-phone'> <Phone style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 전화번호 </p>
                <p className='icon-p'>(Phone) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-access_time'> <AccessTime style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 시분 </p>
                <p className='icon-p'>(AccessTime) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-loyalty'> <Loyalty style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 태그(마케팅) </p>
                <p className='icon-p'> (Loyalty) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-arrow_drop_down'> <ArrowDropDown style={{ fontSize: '25px' }} className='con-icon'/> </div>
                <p className='common-p2'> 단일선택(설렉트) </p>
                <p className='icon-p'>(ArrowDropDown) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-create_new_folder'> <CreateNewFolder style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 파일첨부(멀티) </p>
                <p className='icon-p'>(CreateNewFolder) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-clear_all'> <ClearAll style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 긴텍스트 </p>
                <p className='icon-p'>(ClearAll) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-email'> <Email style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 이메일 </p>
                <p className='icon-p'>(Email) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-timelapse'> <Timelapse style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 시간(Time,From ~ to) </p>
                <p className='icon-p'>(Timelapse) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-date_range'> <DateRange style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 기간(Date, Time, From ~ to) </p>
                <p className='icon-p'>(DateRange) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-group_work'> <GroupWork style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 자원분류(표준) </p>
                <p className='icon-p'>(GroupWork) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-check_box'> <CheckBox style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 다중체크(체크박스) </p>
                <p className='icon-p'>(CheckBox) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-link'> <InsertLink style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 링크 </p>
                <p className='icon-p'>(InsertLink) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-event_available'> <EventAvailable style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 일자(Date) </p>
                <p className='icon-p'>(EventAvailable) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-location_on'> <LocationOn style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 주소검색 </p>
                <p className='icon-p'>(LocationOn) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-swap_horiz'> <SwapHoriz style={{ fontSize: '20px' }} className='con-icon'/> </div>
                <p className='common-p2'> TID 연동 </p>
                <p className='icon-p'>(SwapHoriz) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-device_hub'> <DeviceHub style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 자원분류(마케팅) </p>
                <p className='icon-p'>(DeviceHub) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-done_all'> <DoneAll style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 다중선택(셀렉트박스) </p>
                <p className='icon-p'>(DoneAll) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-image'> <Image style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 이미지 선택 </p>
                <p className='icon-p'>(Image) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-event'> <Event style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 일시(Date,Time) </p>
                <p className='icon-p'>(Event) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-looks_two'> <LooksTwo style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 숫자텍스트 </p>
                <p className='icon-p'>(LooksTwo) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-code'> <Code style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 코딩 </p>
                <p className='icon-p'>(Code) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-extension'> <Extension style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 확장 </p>
                <p className='icon-p'>(Extension) </p>
              </Box>
              <Box className='icon-onebox'>
                <div className='icon-burst_mode'> <BurstMode style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 영상 </p>
                <p className='icon-p'>(BurstMode) </p>
              </Box>
            </div>

            <div className='icon-box-2group'> 
              <Box className='icon-onebox'>
                <div className='icon-toggle_off'> <ToggleOff style={{ fontSize: '13px' }} className='con-icon'/> </div>
                <p className='common-p2'> 토글 </p>
                <p className='icon-p'>(ToggleOff) </p>
              </Box>
            </div>

            <div className='icon-btn'>
              <Box className='icon-btn-box'>
                <Button color='primary' variant='outlined' className='icon-btn1'> <Highlight className='icon-btn-icon'/> 선택중단 </Button>
              </Box>
            </div>
          </Box>
        </div>
      </>
    );
  };
  
  export default Materialicons;