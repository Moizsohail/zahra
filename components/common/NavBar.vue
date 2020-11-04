<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/"
        ><img src="~/assets/tlogo.png"
      /></nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Academics
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <nuxt-link class="dropdown-item" to="/research/"
                >Research</nuxt-link
              >
              <a class="dropdown-item" href="#">Teaching</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Success Stories</a>
            </div>
          </li>
          <li class="dropdown-submenu">
            <a class="nav-link dropdown-toggle" tabindex="-1" href="#"
              >Projects <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <!-- <li>
                <a tabindex="-1" class="nav-link dropdown-item" href="#">{{
                  head
                }}</a>
              </li>
              <li>
                <a tabindex="-1" class="nav-link dropdown-item" href="#"
                  >2nd level dropdown</a
                >
              </li> -->
              <li v-for="h in head" :key="h" class="dropdown-submenu">
                <a class="nav-link dropdown-toggle" href="#"
                  >{{ h }}<span class="caret"></span
                ></a>
                <ul
                  v-for="c in child(h)"
                  :key="c"
                  class="dropdown-menu dropdown-inner"
                >
                  <li>
                    <a href="#" class="nav-link dropdown-item">{{ c }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    head() {
      const heads = new Set()
      this.$store.state.data.forEach((x) => heads.add(x.head))
      console.log(heads)
      return Array.from(heads)
    },
    child() {
      return (h) => {
        const a = this.$store.state.data.filter((x) => x.head === h)
        console.log(a)
        return a.map((x) => x.title)
      }
    },
  },
}
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block !important;
}
.navbar-brand img {
  height: 50px;
  padding: 0px;
  margin: 0px;
}
.dropdown-inner {
  top: 0px;
  left: 100%;
}
.dropdown {
  background: white;
  opacity: 1;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu a {
  color: rgba(0, 0, 0, 0.8) !important;
}
.dropdown-menu:hover,
.dropdown-submenu:hover > .dropdown-menu {
  display: block !important;
}
.dropdown-submenu {
  z-index: 10001;
}
.dropdown-submenu .dropdown-menu {
  margin-top: -1px;
  z-index: 10001;
}
</style>
