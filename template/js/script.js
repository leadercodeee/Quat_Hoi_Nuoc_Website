document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc submit form thật

    // Hiển thị thông báo xác nhận
    document.getElementById("confirmationMessage").classList.remove("hidden");
    
    // Xóa nội dung email trong ô input
    document.getElementById("email").value = "";
});
