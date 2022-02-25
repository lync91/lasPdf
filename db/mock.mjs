import db from './db.mjs';
import User from "./models/user.mjs";
import Congty from "./models/congty.mjs";
import PhongLas from "./models/phonglas.mjs";
import Congtrinh from "./models/congtrinh.mjs";
import Thinghiem from "./models/thinghiem.mjs";
//Drop Table
export async function mock() {
  await db.drop();
  await db.sync();
  const users = await User.bulkCreate([
    { username: 'lichvu', fullname: 'Vũ Văn Lịch', chucvu: "Trưởng phòng"},
    { username: 'sonvu', fullname: 'Vũ Hoàng Sơn'},
    { username: 'toaitrinh', fullname: 'Trịnh Minh Toại'},
    { username: 'chanhhuynh', fullname: 'Huỳnh Bảo Chánh'},
    { username: 'duyvu', fullname: 'Vũ Văn Duy'},
  ]);

  const congty = await Congty.bulkCreate([
    { 
      ten: "Công ty cổ phần đầu tư xây dựng dịch vụ Nam Việt", 
      diachi: "156 đường 11, Kp 5, phường Linh Xuân, quận Thủ Đức, Tp. Hồ Chí Minh", 
      daidien: "Đặng Văn Chiến", 
      chucvu: "Giám đốc" 
    },
    { 
      ten: "Công ty cổ phần xây dựng 48", 
      diachi: "156 đường 11, Kp 5, phường Linh Xuân, quận Thủ Đức, Tp. Hồ Chí Minh", 
      daidien: "Phạm Điều", 
      chucvu: "Phó giấm đốc" 
    },
    { 
      ten: "Công ty cổ phần đầu tư phát triển và xây dựng hạ tầng",
    },
  ])

  const phonglas = await PhongLas.bulkCreate([
    {
      ten: "Trung tâm thí nghiệm kiểm định xây dựng LAS -XD 1483",
      congty: 2,
      diachi: "Địa chỉ: Số 156 đường số 11 - KP5 - P.Linh Xuân - Tp.Thủ Đức - Tp.Hồ Chí Minh",
      dienthoai: "02837240483",
      fax: "028 3724 0473",
      truongphong: "Vũ Văn Lịch"
    }
  ])

  const congtrinh = await Congtrinh.bulkCreate([
    {
      ten: "Sửa chữa, nâng cấp kênh Tây thuộc hệ thống thủy lợi Dầu Tiếng",
      diadiem: "Gồm các huyện Dương Minh Châu, Tân Biên, Châu Thành và thành phố Tây Ninh, tỉnh Tây Ninh",
    }
  ])

  const thinghiem = await Thinghiem.bulkCreate([
    {
      congtrinh: 1,
      donvitn: 1,
      goithau: "Xây dựng hệ thống lan can hai bên bờ kênh Tây",
      nhathau: 1,
      giamsat: 3
    }
  ])
  
}