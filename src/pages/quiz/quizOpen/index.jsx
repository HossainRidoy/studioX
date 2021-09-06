import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../../../api/quiz'



const QuizOpen = (props) => {

    const [quizStore, setQuizStore] = useState(null)

    useEffect(() => {
        getItem(parseInt(props.match.params.id))
    }, [])

    const getItem = (clickId) => {
        let filterItem = Quiz.filter((item) => item.id === clickId)
        setQuizStore(filterItem)
    }

    // console.log(quizStore)


    return (
        <section className="py-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{quizStore && quizStore[0].title}</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-9">
                        {quizStore && quizStore.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-header bg-dark">
                                    <h5 className="text-center py-3 text-white">{item.title}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {item.quizImg && item.quizImg.length > 0 && item.quizImg.map((rItem, index) => (
                                            <div key={index} className="col-6">
                                                <img className='img-fluid' src={rItem.QuizPicture} alt="" />
                                                <h6 className="text-center py-3 bg-dark text-white">{rItem.title}</h6>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuizOpen
