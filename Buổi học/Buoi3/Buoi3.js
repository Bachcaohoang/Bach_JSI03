// class cần một cái tên chung ko quá cụ thể như student,Sport
// constructor khi đặc các tên thì các đó kèm với thuộc tính của nó
// this là dùng để lấy các Object  trong một đối tượng và khi khai báo cái Object thì sẽ đi kèm với thuộc tính Object
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

 