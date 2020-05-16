import React , { useReducer , useEffect , useState } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';

// impor Contexts
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';

// import Reducers
import AppReducer from './../Reducers/appReducer';

// imports Routes
import Home from '../Routes/Home';
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Todo from '../Routes/Todo';
import NotFound from '../Routes/NotFound';

function App() {

    const [state , dispatch] = useReducer(AppReducer , {
        todos : [],
        authenticated : false 
    })

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ 
                authenticated : state.authenticated,
                dispatch
            }}>
                <TodosContext.Provider value={{
                                todos: state.todos,
                                dispatch
                            }}>
                                <div className="App">
                                    <Header />
                                    <main>
                                        <Switch>
                                            <Route path="/" exact component={Home}/>
                                            <Route path="/about" component={About}/>
                                            <Route path="/contact" component={Contact}/>
                                            <Route path="/todos/:todo" component={Todo}/>   
                                            <Route path="/404" component={NotFound} />                         
                                            <Route component={NotFound} />                         
                                        </Switch>
                                    </main>
                                </div>
                            </TodosContext.Provider>
            </AuthContext.Provider>   
        </BrowserRouter>
    )
}

export default App;
