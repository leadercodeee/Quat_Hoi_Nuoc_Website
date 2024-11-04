const sidebar = document.querySelector(".left")
sidebar.innerHTML = `
        <!-- Sidebar -->
        <!-- logo -->
        <div class="logo">
          <img src="../images/logo.png" alt="logo" />
          <span>Furni</span>
        </div>
        <!-- Divider -->
        <hr class="solid" />
        <!-- list item -->
        <div class="list-navbar">
          <ul class="list-item">
            <li class="item">
              <i class="fa-solid fa-fan"></i>
              Quản lý sản phẩm
            </li>
            <li class="item">
              <i class="fa-solid fa-layer-group"></i>
              Quản lý danh mục
            </li>
            <li class="item">
              <i class="fa-solid fa-table-list"></i>
              Quản lý người dùng
            </li>
            <li class="item">
              <i class="fa-solid fa-gift"></i>
              Quản lý đơn hàng
            </li>
          </ul>
        </div>
        <!-- profile -->
        <div class="profile">
          <div class="avatar">
            <img
              src="https://png.pngtree.com/png-vector/20240724/ourlarge/pngtree-administrator-admin-avatar-png-image_12853673.png"
              alt="avatar"
            />
          </div>
          <p class="name">Emily Jonson</p>
          <span class="email">emilyjonson@gmail.com</span>
        </div>
        <!-- logout -->
        <ul class="list-item">
          <li class="item">
            <i class="fa-solid fa-right-from-bracket"></i>
            Đăng xuất
          </li>
        </ul>
     `
