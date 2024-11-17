// Xem trước ảnh đại diện khi người dùng chọn ảnh mới
document.getElementById("avatar").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("avatarPreview").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Xử lý gửi form và hiển thị thông báo thành công
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form thực sự

    // Hiển thị thông báo xác nhận
    document.getElementById("confirmationMessage").classList.remove("hidden");
    
    // Xóa nội dung mật khẩu để tăng cường bảo mật
    document.getElementById("password").value = "";
});
