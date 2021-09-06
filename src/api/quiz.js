
import Waatch from "../assets/images/quiz/watch/watch.png"
import Waatch_1 from "../assets/images/quiz/watch/watch_1.jpg"
import Waatch_2 from "../assets/images/quiz/watch/watch_2.jpg"

import Belt from "../assets/images/quiz/belt/belt-suits.png"
import Belt_1 from "../assets/images/quiz/belt/1.jpg"
import Belt_2 from "../assets/images/quiz/belt/2.jpg"


import Shoe from "../assets/images/quiz/shoe/shoe.png"
import Shoe_1 from "../assets/images/quiz/shoe/1.jpg"
import Shoe_2 from "../assets/images/quiz/shoe/2.jpg"




const Quiz = [
    {
        id: 1,
        picture: Waatch,
        title: "কোন ধরনের হাতঘড়ি সবচেয়ে বেশি স্টাইলিশ?",
        url:"/quizpen/waatch/1",
        quizImg: [
            {
                id: 1,
                title: "স্মার্ট-ওয়াচ",
                QuizPicture: Waatch_1,
            },
            {
                id: 2,
                title: "অ্যানালগ ওয়াচ",
                QuizPicture: Waatch_2,
            }
        ],
    },
    {
        id: 2,
        picture: Belt,
        title: "Which belt suits you better?",
        url:"/quizpen/waatch/2",
        quizImg: [
            {
                id: 1,
                title: "Formal",
                QuizPicture: Belt_1,
            },
            {
                id: 2,
                title: "Casual",
                QuizPicture:Belt_2,
            }
        ],
    },
    {
        id: 3,
        picture: Shoe,
        title: "What's your favorite shoe for attending a wedding?",
        url:"/quizpen/waatch/3",
        quizImg: [
            {
                id: 1,
                title: "Single Monk Strap",
                QuizPicture: Shoe_1,
            },
            {
                id: 2,
                title: "Wholecut Oxfords",
                QuizPicture:Shoe_2,
            }
        ],
    }

]
export default Quiz