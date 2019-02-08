import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GolbalStyle } from './style'
import { IconFontGolbalStyle } from './assets/iconfont/iconfont'
import store from './store'
import DefaultRouter from './router'

class App extends Component { 
    constructor(props) { 
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>                              
                    <IconFontGolbalStyle/>
                    <GolbalStyle/>
                    <Header/>
                    <DefaultRouter/>                                
                </Provider>
            </BrowserRouter>
        );
    }
}

export default	App
