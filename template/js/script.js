// Hàm thay đổi ảnh đại diện
function changeAvatar() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.querySelector(".avatar-image").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    // Mở hộp thoại chọn file
    fileInput.click();
}

// Thêm sự kiện click cho nút thay đổi ảnh đại diện
document.querySelector(".camera-button").addEventListener("click", changeAvatar);

// Kích hoạt nút "Lưu Thay Đổi" khi đồng ý với điều khoản
document.getElementById("acceptTerms").addEventListener("change", function() {
    document.getElementById("submitButton").disabled = !this.checked;
});

// Xử lý sự kiện gửi form
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn tải lại trang khi gửi form

    // Hiển thị thông báo cập nhật thành công
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // Đặt thời gian để ẩn thông báo sau vài giây
    setTimeout(() => {
        document.getElementById("confirmationMessage").classList.add("hidden");
    }, 3000);
});
