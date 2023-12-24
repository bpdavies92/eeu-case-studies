import {ref} from "vue"

const projects = () => {
    const caseStudies = ref([
        {
            id: 1,
            type: 'Introductions',
            description: 'Introductory videos are great to spark interest and engaging your students These can be part of induction or for starting modules to introduce students to new course content',
            featuredVideo: '<iframe class="rounded" width="100%" height="300px" src="https://www.youtube.com/embed/07q6oplTkv0?si=Fco6NbeIJHojwNEF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" allowfullscreen></iframe>'

        }
    ])

    return { caseStudies }
}

export default projects