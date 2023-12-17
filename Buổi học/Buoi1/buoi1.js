// Câu1
 /*let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
//     Hãy tạo một prompt với câu hỏi: “Độ tuổi cần tìm?”. Khi nhập vào một số, hiển thị ra màn hình tên của những người có độ tuổi tương ứng nhập vào. Nếu không có thì hiển thị: “Không tìm thấy!”
// Hãy tạo một prompt với câu hỏi: “Khóa học cần tìm?”. Khi nhập vào mã khóa học (VD: mindX 02) sẽ hiển thị ra màn hình tên tất cả những người học khóa đó. Nếu khóa học không có, hiển thị: “Chưa có lớp học này

   
    let nhaptuoi = prompt("Độ tuổi cần tìm: ");
let nhaplop = prompt("Nhập lớp cần tìm");

let timtuoi = false;
let timlop = false;

for (let person of student) {
    if (person.age == parseInt(nhaptuoi)) {
        console.log(person.name)
        timtuoi = true;
    }

    if (person.course.includes(nhaplop)) {
        console.log(person.name)
        timlop = true;
    }
} */
//  câu2
 let arr1 = [0,2,4,6,8]
 let arr2 = [1,3,5,7]
//  Duyệt 2 array trên và hiển thị ra màn hình những số lớn hơn 3.
//  Ghép 2 array kể trên lại thành 1 arry như sau: [0,2,4,6,8,1,3,5,7]
//  Ghép 2 array kể trên lại thành 1 arry như sau: [0,1,2,3,4,5,6,7,8]
/* arr1.forEach(item => {
     if (item > 3 ){
         console.log(item)
     }
 });

 arr2.forEach(item => {
     if (item > 3 ){
         console.log(item)
     }
 });*/
/*caub
let twoArr=arr1.concat(arr2);
console.log(twoArr)*/
/*cauc  
 let twoArr =arr1.concat(arr2).sort((a,b) => a-b);

  console.log(twoArr)*/


/*
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        
        // Lặp qua mỗi đối tượng trong mảng data
        for (let post of data) {
            // Xử lý thông tin của mỗi bài viết (post) ở đây
        let albumIdElement = document.createElement("h1");
        let idElement = document.createElement("h2");
        let titleElement = document.createElement("h3");
        let urlElement = document.createElement("h4");
        let thumbnailUrlElement = document.createElement("h5");
            // console.log(post.title);
            // console.log(post.body);

            albumIdElement.textContent = post.albumId;
            idElement.textContent = post.id;
            titleElement.textContent = post.title;
            urlElement.textContent = post.url;
            thumbnailUrlElement.textContent = post.thumbnailUrl;

            const dataElement = document.getElementById("data");

            dataElement.appendChild(titleElement);
            dataElement.appendChild(titleElement);
            dataElement.appendChild(titleElement);
            dataElement.appendChild(titleElement);
            dataElement.appendChild(bodyElement);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();*/

/*
 console.log(mergeArr)

const link = "https://jsonplaceholder.typicode.com/photos"

async function fetchImage() {
    try {
        const response = await fetch(link);
        let data = await response.json();

        let newData = data.slice(0, 5)

        newData.forEach(item => {
            let image = document.createElement('img')
            image.src = item.thumbnailUrl
            document.body.appendChild(image)
        })
    } catch (error) {
        console.log(error)
    }

}

fetchImage() */

/*
const arr = [4,5,6]
const arr2 = [ 1,2,3]

// const max = Math.max(...arr)

// let arrClone =[...arr,7]
const contact =[...arr,0 .arr2]
console.log(contact) */

/*
const arr = [1,2,3]
const arr2 = arr.map((item) => {
    return item * 2;
})
console.log(arr2)
console.log(arr)
/*
const arr = [1,2,3]
const arr2 = arr.filter((item) => {
    return item % 2===0;
})
console.log(arr2)
console.log(arr)*/
