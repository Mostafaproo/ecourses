<template>
  <div class="navigation">
    <div class="container">
      <div class="main-nav">
        <div class="brand">
          <router-link :to="{ name: 'Home' }">
            <span>e</span>Cours<span>e</span>s
          </router-link>
        </div>
        <div class="links">
          <ul class="nav">
            <li class="items">
              <router-link :to="{ name: 'Home' }" class="item-link">
                home</router-link
              >
            </li>
            <li class="items">
              <a href="#" class="item-link"> Courses</a>
            </li>
            <li class="items">
              <a href="#" class="item-link"> Features</a>
            </li>
            <li class="items">
              <a href="#" class="item-link"> Blog</a>
            </li>
            <li class="items">
              <a href="#" class="item-link"> Contact Us</a>
            </li>
            <li class="items">
              <a href="#" class="item-link">
                <span class="fa fa-search"></span
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  background-color: $main-color;
  color: #fff;

  .main-nav {
    padding: 5px 0;
    border-top: 1px solid #535353;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .brand {
      font-size: 30px;
      span {
        color: $second-color;
      }
    }

    .links {
      text-transform: uppercase;
      font-size: 14px;
      .items {
        margin: 0 10px;
        &:last-of-type {
          margin: 0;
        }

        .item-link {
          transition: $transition;
          position: relative;
          padding: 8px 0;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 0%;
            background-color: $second-color;
            transition: $transition;
          }
          &:hover {
            color: $second-color !important;
          }
          &:hover::before {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
