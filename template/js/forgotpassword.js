// Lấy các phần tử từ DOM
const emailInput = document.getElementById('email');
const form = document.querySelector('form');

// Kiểm tra tính hợp lệ của email hoặc số điện thoại
form.addEventListener('submit', (event) => {
    const inputValue = emailInput.value.trim();

    // Kiểm tra nếu trường email/số điện thoại bị trống
    if (!inputValue) {
        event.preventDefault();
        alert('Vui lòng nhập email hoặc số điện thoại!');
        return;
    }

    // Biểu thức kiểm tra email hợp lệ
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Biểu thức kiểm tra số điện thoại hợp lệ (10 chữ số)
    const phonePattern = /^\d{10}$/;

    // Nếu không khớp với email hoặc số điện thoại, báo lỗi
    if (!emailPattern.test(inputValue) && !phonePattern.test(inputValue)) {
        event.preventDefault();
        alert('Vui lòng nhập một email hợp lệ hoặc số điện thoại 10 chữ số!');
        return;
    }

    // Nếu hợp lệ, tiếp tục gửi form
    alert('Yêu cầu đang được xử lý...');
});
