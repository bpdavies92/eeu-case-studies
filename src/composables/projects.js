import {ref} from "vue"

const projects = () => {
    const caseStudies = ref([
        {
            id: 1,
            type: 'Introductions',
            description: 'Introductory videos are great to spark interest and engaging your students. These can be part of induction or for starting modules to introduce students to new course content',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/Kw-YBBXtERo" title="Research Anne-Marie and James" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            id: 2,
            type: 'Simulations',
            description: 'Case studies and scenarios can be constructive and relevant to your teaching. These provide a unique perspective and are personalised.',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/WEPMDb3b2JM" title="Speech Therapy 8.5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            videos: [
                {
                    title: 'Speech Therapy 8.5',
                    description: 'These examples are simulations of a real world situations for speech and language therapists.',
                    embedCode: '<iframe width="1206" height="678" src="https://www.youtube.com/embed/WEPMDb3b2JM" title="Speech Therapy 8.5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                },
                {
                    title: 'Speech Therapy 2',
                    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZNe0yEscl3Y?si=IK-co0MUnI1WCw1e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    description: 'One is with a client, the other is giving feedback to a student, both would be difficult to for third parties to observe in real life.'
                }
            ]
        },
        {
            id: 3,
            type: 'Interviews',
            description: 'These can be a record of a conversation between a group or a set of Q&As to address key topics',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/Dxe2IPV7f04?si=j4D__V7EarGcQk67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            id: 4,
            type: 'Animations',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/07q6oplTkv0" title="Make every moment matter – BA (Hons) Business and Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            description: 'This is an example of animation that explains a concept in Business. The original format was a paragraph of text. Animations brings the idea to life and makes it memorable.',
            videos: [
                {
                    title: 'Corporate ethical environment',
                    embedCode: 'Need to find vid and embed',
                    description: ''

                },
                {
                    title: 'Unit 6',
                    embedCode: '<iframe width="551" height="309" src="https://www.youtube.com/embed/kKVOfePNW-g" title="UNIT 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    description: ''
                }
            ]
        },
        {
            id: 5,
            type: 'Demonstrations',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/L9QW6zIxYQ0" title="How to use a stadiometer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',    
            description: 'You can use demonstrations to focus on: Showcasing the facilities in industry Instructions for task (e.g. technical procedure, how to use a digital tool, how to use equipment, where to find information). These are interactive and relevant to their studies',
            videos: [
                {
                    title: 'Victoria Sponge - Nutrition Course',
                    embedCode: '<iframe width="696" height="319" src="https://www.youtube.com/embed/c65y6Wl37vY" title="Victoria Sponge - Nutrition Course Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    
                }
            ]
        },
        {
            id: 6,
            type: 'Screen-recording',
            featuredVideo: '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/TeuYlx8ukH8" title="Loughborough - Dave Glew - Year 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',    
            description: 'You can use demonstrations to focus on: Showcasing the facilities in industry Instructions for task (e.g. technical procedure, how to use a digital tool, how to use equipment, where to find information). These are interactive and relevant to their studies',
            videos: [
                {
                    title: 'Victoria Sponge - Nutrition Course',
                    embedCode: '<iframe width="696" height="319" src="https://www.youtube.com/embed/c65y6Wl37vY" title="Victoria Sponge - Nutrition Course Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    
                }
            ]
        }
    ])

    return { caseStudies }
}

export default projects