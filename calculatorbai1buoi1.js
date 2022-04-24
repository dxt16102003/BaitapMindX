
const Pi = 3.14;
const sum = (a,b) => {
    console.log("tong la: "+ (a + b));
}
export {sum};

const calculateRectArea =(a, b) => {
    console.log('dien tich hình chữ nhật là: ' + a*b);
}
export {calculateRectArea};

export function calculateCircleArea (r) {
    console.log('dien tich hình tròn là: ' + Pi * r * r);
    
}



const maytinh = ({name}) => {
	console.log(`may tinh la: ${name}`);
}
export default maytinh;
