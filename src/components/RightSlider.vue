<template>
  <div>
    <div>
      <div class="d-flex justify-content-between align-items-center my-3">
        <div class="notification rounded-circle">
          <span> <i class="bi bi-bell"></i></span>
        </div>
        <div>
          <p class="fw-bold">William Dawson</p>
        </div>

        <img
          :src="profileFour"
          class="myProfile rounded-circle"
          alt="User Profile"
        />
      </div>
    </div>
    <div class="card rounded-5">
      <img
        class="card-img-top img-fluid rounded-3 p-3"
        alt="Card image cap"
        :src="cardImgs"
      />

      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title fw-bold">Booking list</h5>
          <span class="fw-bold">...</span>
        </div>

        <div
          class="d-flex justify-content-around border-bottom my-3"
          v-for="dataList in bookingDataList"
          :key="dataList.bookingType"
        >
          <img
            :src="dataList.profile"
            class="myProfile rounded-circle"
            alt="profile icon"
          />

          <div>
            <div class="">
              <p class="fw-bold">{{ dataList.name }}</p>
              <div class="d-flex">
                <p class="text-secondary">{{ dataList.bookingType }} .</p>
                <p class="text-secondary">{{ dataList.guestsCount }} guests</p>
              </div>
            </div>
          </div>
          <div>
            <p>{{ dataList.date }}</p>
            <div
              :class="dataList.bookingStatus === 'Pending' ? 'pending' : 'paid'"
            >
              <p>{{ dataList.bookingStatus }}</p>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item text-center">
          <a class="nav-link" href="#">View All</a>
        </li>
      </ul>
    </div>
    <div class="card rounded-5 my-4 footerFeatures">
      <div class="text-center pt-4 pb-2">
        <span class="fw-bold">UNLOCK NEW FEATURES</span>
      </div>
      <div class="my-3 text-center pb-3">
        <button class="btn btn-primary rounded-pill">Get Pro Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSlider",
  data() {
    return {
      cardImgs: require("/public/assets/card-img.png"),
      profileFour: require("/public/assets/profilefour.jpg"),
      bookingDataList: [
        {
          name: "Wade Warner",
          bookingType: "#SGL",
          guestsCount: 0,
          date: "01.12-01.14",
          bookingStatus: "Paid",
          profile: require("/public/assets/profileone.jpg"),
        },
        {
          name: "Jacob Jones",
          bookingType: "#QDPL",
          guestsCount: 3,
          date: "01.12-01.13",
          bookingStatus: "Pending",
          profile: require("/public/assets/profiletwojpg.jpg"),
        },
        {
          name: "kathryn  Murphy",
          bookingType: "#DBL",
          guestsCount: 1,
          date: "01.12-01.15",
          bookingStatus: "Paid",
          profile: require("/public/assets/profilethree.jpg"),
        },
      ],
    };
  },
  computed: {
    cardimgs() {
      return "../assets/card-img.png";
    },
  },
};
</script>

<style scoped>
.myProfile {
  height: 50px;
  width: 50px;
}

.paid {
  text-align: center;
  background-color: rgb(246, 234, 255);
  border-radius: 20px;
  margin: 10px;
  color: rgb(145, 70, 217);
}
.pending {
  background-color: #fef3d1;
  text-align: center;
  padding: 0px 5px;
  border-radius: 20px;
  margin: 10px;
  color: rgb(230, 151, 57);
}

.notification {
  background-color: rgb(255, 255, 255);
  padding: 10px 16px;
  color: rgb(124, 142, 166);
}
.footerFeatures {
  background-color: rgb(255, 243, 232);
}
</style>
