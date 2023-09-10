<template>
  <div class="slider-left position-relative">
    <div class="slider-content">
      <div class="mx-4 my-4">
        <span class="fw-bold">HOTEL,</span>
        <span class="text-secondary">SWAN</span>
      </div>
      <ul class="nav flex-column hover-bg-warning">
        <li class="nav-item d-flex align-items-center active p-18">
          <span>
            <i class="bi bi-bar-chart-line"></i>
          </span>
          <a class="nav-link text-primary" href="#">Overview</a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <span><i class="bi bi-calendar2-week"></i></span>
          <a class="nav-link text-muted" href="#">Calendar</a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <span><i class="bi bi-key"></i></span>
          <a class="nav-link text-muted" href="#">Booking</a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <span><i class="bi bi-calendar-event"></i></span>
          <a class="nav-link text-muted" href="#">Earnings</a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <span><i class="bi bi-people"></i></span>
          <a class="nav-link text-muted" href="#">Stuff</a>
        </li>
      </ul>
      <div class="position-absolute bottom-0 d-flex align-items-center ">
        <div class="chatIcon mb-3">
          <i class="bi bi-chat-left-dots"></i>
        </div>
        <li class="d-flex align-items-center mx-5 mb-3 settingList">
          <span><i class="bi bi-gear mx-2"></i></span>
          <a class="nav-link mx-3" href="#">Setting</a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSlider",
};
</script>

<style scoped>
.slider-left {
  width: 90%;
  background-color: #ffffff;
  color: #000;
  padding: 20px;
}
.settingList {
  border-radius: 20px;
  background-color: #e7dff0;
}

.slider-content {
  padding-top: 20px;
  border-radius: 35px;
  box-shadow: 7px 8px 25px 12px #f1f1f1;
  position: relative;
  height: 123vh;
}
li {
  padding: 12px 0px;
}
ul {
  margin: 0px 25px;
  margin-top: 50px;
}

.chatIcon {
  border-radius: 50%;
  background-color: rgba(255 234 240);
  padding: 12px 16px;
}
.nav-item:hover {
  background-color: #c6bbbb;
  color: #000;
  border-radius:20px;
  padding:0px 5px
}
</style>
