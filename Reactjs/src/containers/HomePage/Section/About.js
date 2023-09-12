import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
// Import css files

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class About extends Component {
  render() {
    return (
      <>
        <div className="section-share section-about">
          <div className="section-about-header">
            Truyền thông về Bookskincare
          </div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/FyDQljKtWnI"
                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content-right">
              <p>
                BookingCare là một Startup công nghệ trong lĩnh vực y tế chăm
                sóc sức khỏe, xây dựng & phát triển Nền tảng Y tế Chăm sóc sức
                khỏe toàn diện hàng đầu tại Việt Nam, giúp kết nối bệnh nhân đến
                với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả và tin
                cậy. Ra mắt từ tháng 7/2016, hiện hàng tháng phục vụ hàng nghìn
                bệnh nhân đi khám và chăm sóc sức khỏe thành công tại các cơ sở
                y tế ở Hà Nội & Tp.HCM.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
