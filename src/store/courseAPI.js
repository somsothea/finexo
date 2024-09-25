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
                const url = "/v1/courses";
                const { data } = await axios.get(url);
                console.log(data)
                this.courses = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useCourse
