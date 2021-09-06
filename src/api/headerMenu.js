import Arrow_down from "../assets/images/socialIcon/chevron-down.svg"
const HeaderMenu = [
    {
        id: 1,
        category: "Home",
        arrow: null,
        subCategory: null,
        url: "/"
    },
    {
        id: 2,
        category: "Sckin Care",
        arrow: Arrow_down,
        subCategory: [
            {
                id: 1,
                category: "Face",
                url: "/blogs/skin-care/face"
            },
            {
                id: 2,
                category: "Body",
                url: "/blogs/skin-care/body"
            },
        ],
        url: false
    },
    {
        id: 3,
        category: "Hair Care",
        arrow: null,
        subCategory: null,
        url: "/blogs/hair"
    },
    {
        id: 4,
        category: "Beard",
        arrow: null,
        subCategory: null,
        url: "/blogs/beard"
    },
    {
        id: 5,
        category: "Grooming",
        arrow: Arrow_down,
        subCategory: [
            {
                id: 1,
                category: "Trends",
                url: "/blogs/grooming/trends"
            },
            {
                id: 2,
                category: "Experts",
                url: false
            },
            {
                id: 3,
                category: "Occasions",
                url: "/blogs/grooming/occasions"
            },
        ],
        url: false
    },
    {
        id: 6,
        category: "Video",
        arrow: Arrow_down,
        subCategory: [
            {
                id: 1,
                category: "How-To",
               
            },
            {
                id: 2,
                category: "Trends",
               
            },
            {
                id: 3,
                category: "Hacks",
               
            },
        ],
        url: false
    },
    {
        id: 7,
        category: "Products",
        arrow: null,
        subCategory: null,
        url: "/products"
    },
    {
        id: 8,
        category: "Quiz",
        arrow: null,
        subCategory: null,
        url: "/quiz"
    },

]
export default HeaderMenu