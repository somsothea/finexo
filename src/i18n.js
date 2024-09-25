// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    Home: 'HOME',
    Serive: 'SERVICE',
    Team: 'TEAM',
    Course: 'COURSE',
    About: 'ABOUT',
    WhyUs: 'WHY US',
    Repo: 'REPO',
    Login: 'LOGIN'
  },
  khm: {
    Home: 'ទំព័រដើម',
    Service: 'សេវាកម្ម',
    Team: 'ក្រុមការងារ',
    Course: 'វគ្គសិក្សា',
    About: 'អំពីយើង',
    WhyUs: 'ជ្រើសយើង',
    Repo: 'រ៉េប៉ូ',
    Login: 'ចូលប្រើ'
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n