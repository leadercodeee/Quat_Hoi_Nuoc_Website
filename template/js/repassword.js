// DOM Elements
const form = document.getElementById("resetPasswordForm");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");

// Xử lý sự kiện khi người dùng nhấn nút "Quay về trang đăng nhập"
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form gửi dữ liệu tự động

    const password = newPassword.value.trim();
    const confirm = confirmPassword.value.trim();

    // Kiểm tra độ dài mật khẩu
    if (password.length < 8) {
        errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự.";
        errorMessage.style.display = "block";
        return;
    }

    // Kiểm tra khớp mật khẩu
    if (password !== confirm) {
        errorMessage.textContent = "Mật khẩu không khớp. Vui lòng nhập lại.";
        errorMessage.style.display = "block";
        return;
    }

    // Nếu tất cả đều hợp lệ
    errorMessage.style.display = "none"; // Ẩn thông báo lỗi
    alert("Đặt lại mật khẩu thành công!"); // Thông báo thành công
    window.location.href = "auth.html"; // Điều hướng đến trang đăng nhập
});
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

