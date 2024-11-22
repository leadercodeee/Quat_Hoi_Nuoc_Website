const inputEmail = document.getElementById('email');
const inputAddress = document.getElementById('Address');
const inputName = document.getElementById('name');
const inputPassword = document.getElementById('password');
const acceptTerms = document.getElementById('acceptTerms');
const submitButton = document.getElementById('submitButton');
const confirmationMessage = document.getElementById('confirmationMessage');
const form = document.getElementById('profileForm');
const errorMessage = document.createElement('p');
errorMessage.classList.add('error', 'hidden');
inputEmail.insertAdjacentElement('afterend', errorMessage);

// Hàm kiểm tra tính hợp lệ (Email hoặc Số điện thoại)
function isValidEmailOrPhone(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email hợp lệ
    const phonePattern = /^\d{10}$/; // Số điện thoại có 10 chữ số
    return emailPattern.test(value) || phonePattern.test(value);
}


function checkFormValidity() {
    const isEmailValid = isValidEmailOrPhone(inputEmail.value.trim());
    const isAddressValid = inputAddress.value.trim() !== '';
    const isNameValid = inputName.value.trim() !== '';
    const isPasswordValid = inputPassword.value.trim().length >= 6 || inputPassword.value.trim() === '';

    submitButton.disabled = !(
        isEmailValid &&
        isAddressValid &&
        isNameValid &&
        isPasswordValid &&
        acceptTerms.checked
    );

    // Hiển thị lỗi nếu email hoặc số điện thoại không hợp lệ
    if (!isEmailValid) {
        errorMessage.textContent = 'Vui lòng nhập email hợp lệ hoặc số điện thoại 10 chữ số.';
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
}

// Lắng nghe sự kiện input để kiểm tra tính hợp lệ của form
[inputEmail, inputAddress, inputName, inputPassword, acceptTerms].forEach((element) => {
    element.addEventListener('input', checkFormValidity);
});

// Hàm thay đổi ảnh đại diện
function changeAvatar() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Kiểm tra kích thước ảnh (giới hạn 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('Ảnh phải nhỏ hơn 2MB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                document.querySelector('.avatar-image').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    // Mở hộp thoại chọn file
    fileInput.click();
}

// Thêm sự kiện click cho nút thay đổi ảnh đại diện
document.querySelector('.camera-button').addEventListener('click', changeAvatar);

// Xử lý sự kiện gửi form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn gửi form để xử lý logic

    const isEmailValid = isValidEmailOrPhone(inputEmail.value.trim());
    if (!isEmailValid) {
        errorMessage.textContent = 'Vui lòng nhập email hợp lệ hoặc số điện thoại 10 chữ số.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // Hiển thị thông báo cập nhật thành công
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.textContent = 'Thông tin đã được cập nhật!';
    
    // Sau 2 giây, chuyển hướng đến trang index.html
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
    
    
    
});
// Đợi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password'); // Trường input mật khẩu
    const togglePassword = document.getElementById('togglePassword'); // Biểu tượng con mắt

    // Thêm sự kiện click cho biểu tượng
    togglePassword.addEventListener('click', () => {
        // Kiểm tra trạng thái hiển thị mật khẩu
        const isPasswordVisible = passwordInput.type === 'text';

        // Chuyển đổi kiểu hiển thị
        passwordInput.type = isPasswordVisible ? 'password' : 'text';

        // Cập nhật biểu tượng
        togglePassword.textContent = isPasswordVisible ? '👁️' : '🙈';
    });
});

