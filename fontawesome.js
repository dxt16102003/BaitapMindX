//Khởi tạo thư viện icon của riêng bạn
import { library } from '@fortawesome/fontawesome-svg-core'; 

//Import các icon mà bạn muốn sử dụng trong từng gói
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEye} from '@fortawesome/free-solid-svg-icons';  

//Add các icon đã được import vào trong thư viện của bạn
library.add( faCoffee, faEye )

