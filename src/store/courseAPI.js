import axios from 'axios'
import { defineStore } from 'pinia'

const useCourse = defineStore('course', {
   state: () => ({
        courses: [],
        repos: [],
        usernames: []
    }),
    actions: {
        async getAllCourses() {
            try {
                //const url = "/v1/stores";
                const { data } = await axios.get('http://36.37.134.139/v1/items');
                console.log(data)
                this.courses = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useCourse
