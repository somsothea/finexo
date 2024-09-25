<!-- header section strats -->
<template>
<header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="#">
          <span>
            {{ appName }}
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="form-inline">
            <img src="assets/images/cambodia.png" @click="changeLocale('khm')" width="20"/>&nbsp;
            <img src="assets/images/usa.png" @click="changeLocale('en')" width="20"/>
            </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item" :class="{ active: $route.path == '/'}">
              <router-link to="/" class="nav-link" href="#">{{ $t('Home') }}<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about'}">
              <router-link to="/about" class="nav-link" href="#">{{ $t('About') }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/services'}">
              <router-link to="/services" class="nav-link" href="#">{{ $t('Service') }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/whyus'}">
              <router-link to="/whyus" class="nav-link" href="#">{{ $t('WhyUs') }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/team'}">
              <router-link to="/team" class="nav-link" href="#">{{ $t('Team') }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/course'}">
              <router-link to="/course" class="nav-link" href="#">{{ $t('Course') }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/repos'}">
              <router-link to="/repos" class="nav-link" href="#">{{ $t('Repo') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true">&nbsp;</i>{{ $t('Login') }}</router-link>
            </li>         

            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

  <!-- end header section -->
  <script>
  export default {
    data() {
      return {
        appName: process.env.VUE_APP_NAME,
      };
    },
    name: 'App',
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale
      }
    }
  }
  </script>