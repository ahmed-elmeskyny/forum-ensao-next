import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import {createWrapper} from "next-redux-wrapper";
import  store from "../redux/store";
import "../styles/globals.css"



class MyApp extends App {

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);