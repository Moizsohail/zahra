<template>
  <div class="contact">
    <div class="contact-card">
      <div class="profilepic">
        <img src="~/assets/citations.jpg" />
      </div>
      <div class="text">
        <h4>Dr. Zahra Lakdawala</h4>
        <p>Instructor at Lums</p>
        <hr class="dashed" />
        <div class="contacts">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          <font-awesome-icon :icon="['fab', 'github']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profilepic {
  position: absolute;
  left: calc(50% - 50px);
  top: -50px;
}
.profilepic img {
  width: 100px;
  border-radius: 50%;
}
.contact-card {
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #f7f7f7;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.contact-card img {
  margin: auto;
  margin-bottom: 30px;
}
.contacts {
  font-size: 20px;
  opacity: 0.7;
}
.contacts > * {
  cursor: pointer;
  margin: 0px 12px 5px;
}
.contact h4 {
  text-align: center;
  font-weight: 600;
  opacity: 0.7;
  font-size: 20px;
}
.contact .text {
  padding: 10px 0px;
  margin-top: 50px;
  text-align: center;
  padding: 10px;
}
.text p {
  padding: 5px;
  font-size: 14px;
  opacity: 0.5;
}

hr.dashed {
  border-top: 0.5px solid #bbb;
}
</style>
