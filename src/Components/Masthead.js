import React, { Component } from 'react';

class Masthead extends Component {
    render() {
        return (
            <header class="masthead" style={{background:"#000000"}}>
                <div class="container">
                    <div class="masthead-subheading">Insure in a few clicks !</div>
                    <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Get Started</a>
                </div>
            </header>
        );

    }

}
export default Masthead;
/* masthead position:sticky  */