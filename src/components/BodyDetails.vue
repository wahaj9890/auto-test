<template>
  <div>
    <div class="input-group p-4 border-bottom">
      <span class="input-group-addon">
        <i class="bi bi-search"></i>
      </span>
      <input type="text" class="border-0 mx-4" placeholder="Search" />
    </div>

    <div>
      <div class="mt-4 fs-1">
        <span class="text-secondary">Welcome,</span>
        <span class="fw-bold">William</span>
      </div>
      <div>
        <span>You have <u>9 free rooms</u> at Saint Denis</span>
      </div>
    </div>

    <!-- Cards -->
    <div class="cardContainer d-flex justify-content-between my-5">
      <div class="firstCard">
        <div class="d-flex justify-content-evenly fw-bold myTitle1 fs-1">
          <span class="fw-bold">4%</span>
          <span class="myicons"> <i class="bi bi-arrow-up"></i></span>
        </div>
        <div class="d-flex">
          <div class="innerCard">
            <h4 class="my-2">31</h4>
          </div>
          <div class="innerCard mx-4">
            <h4 class="my-2">19</h4>
          </div>
        </div>

        <div v-html="temp"></div>
      </div>

      <div class="innerSecond">
        <div class="d-flex justify-content-evenly fw-bold myTitle2 fs-1">
          <span class="fw-bold">6%</span>
          <span class="myicons"> <i class="bi bi-arrow-down"></i></span>
        </div>
        <div class="d-flex">
          <div class="innerCard">
            <h4 class="my-2">18</h4>
          </div>
          <div class="innerCard mx-4">
            <h4 class="my-2">15</h4>
          </div>
        </div>
        <div v-html="temp"></div>
      </div>

      <div class="lastCard">
        <div>
          <span>+</span>
        </div>
        <div class="">
          <span>Add new Project</span>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="denis">
        <h4 class="fw-bold">Saint Denis</h4>
      </div>
      <div class="blackWater">
        <h4 class="fw-bold">Black Water</h4>
      </div>
    </div>

    <!-- Chart -->
    <div class="text-center my-3">
      <img :src="chart" alt="chart" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyDetails",
  data() {
    return {
      chart: require("/public/assets/chart.png"),
    };
  },
  computed: {
    temp() {
      return '<div class="d-flex justify-content-end mt-3 "><div><h6 class="fw-bold">Booked</h6></div><div class="mx-4"><h6 class="fw-bold">Check In</h6></div></div>';
    },
  },
};
</script>

<style scoped>
.userName {
  font-size: 67px;
  margin-top: 25px;
}
.firstCard {
  background-color: rgb(254, 245, 232);
  padding: 35px;
  border-radius: 10%;
}
.innerSecond {
  padding: 35px;
  background-color: rgb(245, 236, 255);
  border-radius: 10%;
}
.innerCard {
  border-radius: 14px;
  background: white;
  padding: 1px 15px;
  margin-left: 20px;
}
.lastCard {
  padding: 50px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-style: dashed;
  border-radius: 10px;
}
.myTitle1 {
  color: rgba(277, 140, 35);
  margin-left: 38px;
}
.myTitle2 {
  color: rgb(145, 70, 217);
  margin-left: 38px;
}
.myicons {
  margin-right: -50px;
  margin-top: -25px;
}
.blackWater {
  margin-left: 145px;
  margin-top: -28px;
}
.denis {
  margin-left: 45px;
  margin-top: -28px;
}
</style>
