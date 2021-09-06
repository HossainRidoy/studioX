import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../layout'
import Home from '../pages/home'
import Blogs from '../pages/bolgs'
import Products from '../pages/produces'
import Login from '../components/login'
import Register from '../components/registration'
import ForgetPassword from '../components/forgetPassword'
import ManCategoryView from '../components/man-category-view'
import Quiz from '../pages/quiz'
import QuizOpen from '../pages/quiz/quizOpen'


const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blogs/:categoryName/:subCategoryName?" exact component={Blogs}/>
                    <Route path="/blogs/:categoryName/:subCategoryName?/:name/:id" exact component={ManCategoryView}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/quiz" exact component={Quiz}/>
                    <Route path="/quizpen/:name/:id" exact component={QuizOpen}/>

                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/forgetpassword" exact component={ForgetPassword}/>

                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes