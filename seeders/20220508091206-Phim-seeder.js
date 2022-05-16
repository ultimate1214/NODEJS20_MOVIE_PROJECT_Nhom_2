"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Phims",
      [
        {
          maPhim: 10158,
          tenPhim: "Spider-Man: Homecoming",
          biDanh: "spider-man-homecoming",
          trailer: "https://www.youtube.com/watch?v=Pik8DPmrt2k",
          hinhAnh:
            "http://movieapi.cyberlearn.vn/hinhanh/spider-man-homecoming_gp01.jpg",
          moTa: "là phim siêu anh hùng năm 2019 của Mỹ dựa trên nhân vật Peter Parker của truyện tranh Marvel. Bộ phim được sản xuất bởi Columbia Pictures và Marvel Studios, và được phân phối bởi Sony Pictures. Bộ phim có ý nghĩa khởi động lại dự án Spider-Man của Marvel sau nhiều năm nhượng quyền lại cho Sony Pictures. Bộ phim là bộ phim thứ 16 trong  Vũ trụ điện ảnh Marvel (MCU). ",
          maNhom: "GP01",
          ngayKhoiChieu: "2022-05-05T18:14:17.303",
          danhGia: 10,
          hot: true,
          dangChieu: false,
          sapChieu: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 10161,
          tenPhim: "The Witch's Diners",
          biDanh: "the-witch-s-diners",
          trailer: "https://www.youtube.com/watch?v=h3WKvtgz1Ng",
          hinhAnh:
            "http://movieapi.cyberlearn.vn/hinhanh/the-witch-s-dinnerr_gp01.jpeg",
          moTa: "Bàn tiệc của phù thủy là bộ phim truyền hình chiếu mạng của Hàn Quốc năm 2021 với sự góp mặt của các ngôi sao chính là Song Ji-hyo, Nam Ji-hyun và Chae Jong-hyeop. Phim được công chiếu lần đầu trên kênh TVING vào ngày 16 tháng 7, 2021 với lịch phát sáng là thứ 6 hàng tuần lúc 16:00",
          maNhom: "GP01",
          ngayKhoiChieu: "2022-03-05T00:00:00",
          danhGia: 10,
          hot: true,
          dangChieu: false,
          sapChieu: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 10168,
          tenPhim: "Red Notices",
          biDanh: "red-notices",
          trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-notices_gp01.jpg",
          moTa: "Thông báo đỏ là một bộ phim hài hành động của Mỹ năm 2021 do Rawson Marshall Thurber viết kịch bản, đạo diễn và sản xuất. Dwayne Johnson, người cũng từng là nhà sản xuất, đóng vai một đặc vụ FBI, người miễn cưỡng hợp tác với một tên trộm nghệ thuật nổi tiếng để bắt một tên tội phạm khét tiếng hơn.",
          maNhom: "GP01",
          ngayKhoiChieu: "2021-12-26T00:00:00",
          danhGia: 10,
          hot: true,
          dangChieu: false,
          sapChieu: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Phims", null, {});
  },
};
