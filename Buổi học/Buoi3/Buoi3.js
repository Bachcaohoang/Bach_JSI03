// class cần một cái tên chung ko quá cụ thể như student,Sport
// constructor khi đặc các tên thì các đó kèm với thuộc tính của nó
// this là dùng để lấy các Object  trong một đối tượng và khi khai báo cái Object thì sẽ đi kèm với thuộc tính Object
// 1. Tính trừu tượng:

//    - Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp để tiện cho việc quản lý và sử dụng.
//    - Che giấu một số thông tin và chi tiết cài đặt nội bộ để bên ngoài không thể nhìn thấy

// 2. Tính đóng gói:
//    - Tổng quát hóa một cái gì đó lên, không cần chú ý chi tiết bên trong. Nó không màng đến chi tiết bên trong là gì và người ta vẫn hiểu nó mỗi khi nghe về nó

// 3. Tính kế thừa:

//    - Nó cho phép xây dựng một lớp mới dựa trên các định nghĩa của lớp đã có
//    - Các lớp con khỏi phải định nghĩa lại, ngoài ra có thể mở rộng các thành phần kế thừa và bổ sung thêm các thành phần mới.

// 4. Tính đa hình:
//    - Hai hoặc nhiều lớp có những phương thức giống nhau nhưng có thể thực thi theo những cách thức khác nhau
//    - VD: lưu trữ thông tin trên cloud
class Sport{
    constructor(point,age,time){
        (this.point = point),(this.age = age),(this.time = time);
    }
}

const soccer = new Sport("25","16","120" )
console.log(soccer)
// thuoc tính thừa
class WomenSport extends Sport{
    constructor(point,age,time,strength){
        super(point,age,time),this.strength= strength;
    }
}
 const gym = new WomenSport("25","16","120","100")
 console.log(gym)

 