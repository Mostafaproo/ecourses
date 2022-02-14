<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 co-md-12">
          <div class="support">
            <p>Hav Any Question?</p>
            <p class="call">
              <a href="tel:01020231860">
                <span class="icon-header fa fa-phone"> </span>
                01020231860
              </a>
            </p>
            <p class="email">
              <a href="mailto:mostafa.livecode@gmail.com">
                <span class="icon-header fa fa-envelope"> </span>
                mostafa.livecode@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="col-lg-6 co-md-12">
          <div class="sing-in">
            <p class="register">
              <router-link :to="{ name: 'Register' }">
                <span class="icon-header fa fa-user-plus"></span>
                Register
              </router-link>
            </p>
            <p class="login">
              <router-link :to="{ name: 'Login' }">
                <span class="icon-header fa fa-user"></span>
                Login
              </router-link>
            </p>
            <p style="color: white">
              <a href="#">Become An instructor</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: $main-color;
  color: $second-color;
  font-size: 13px;
  padding: 10px 0;
  .support {
    display: flex;
    align-items: center;

    .call {
      margin: 0 15px;
    }
  }
  .icon-header {
    margin-right: 5px;
  }

  // Singin
  .sing-in {
    display: flex;
    align-items:center;
    justify-content: flex-end;
    .login {
      margin: 0 15px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        top: 20%;
        height: 15px;
        right: -10px;
        background: $second-color;
      }
    }
  }
}
@media (max-width: 992px) {
  .sing-in {
    margin-top: 10px;
  }
  .sing-in,
  .support {
    font-size: 11px;
    justify-content: center !important;
  }
}
</style>
