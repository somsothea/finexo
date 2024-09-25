
import { createRouter, createWebHistory } from 'vue-router'

// Import your folder pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Services from '@/pages/Services.vue'
import WhyUs from '@/pages/WhyUs.vue'
import Team from '@/pages/Team.vue'
import TeamProfile from '@/components/TeamProfile.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Team2 from '@/pages/Team2.vue'
import Course from '@/pages/Courses.vue'
import Repos from '@/pages/Repos.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/whyus', component: WhyUs },
    { path: '/team', component: Team, children:[
      {path: '', component: Team2},
      {path: ':id', component: TeamProfile},
      {path: 'service', component: Services},
    ] },
    { path: '/login', component: Login },
    { path: '/course', component: Course },
    { path: '/course/:url', component: Course },
    { path: '/repos', component: Repos },
    { path: '/register', component: Register },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router