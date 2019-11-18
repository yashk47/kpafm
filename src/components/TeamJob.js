import React, { Component } from 'react';

class TeamJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="wrapper">
            <div className="pricing-table gprice-single card01">
              <div className="head">
                <h4 className="title">Basic</h4> 
              </div>
              <div className="content">
                <div className="price">
                  <h1>$19</h1>
                </div>
                <ul>
                  <li>sdsds</li>
                  <li>sdfgsdg</li>
                  <li>asdfds</li>
                  <li>sdfdsfsdg</li>
                  <li> <del>adgagfsdgs</del> </li>
                  <li> <del>gsfdgsdfgsfd</del></li>
                </ul>
                <div className="sign-up">
                  <a href="#" className="btn bordered radius">Select</a>
                </div>
              </div>
            </div>
            <div className="pricing-table gprice-single card01">
              <div className="head">
                <h4 className="title">Standard</h4>
              </div>
              <div className="content">
                <div className="price">
                  <h1>$29</h1>
                </div>
                <ul>
                  <li>sadasd</li>
                  <li>dfsdf sdf sdfs df</li>
                  <li>asdas dsadasdas</li>
                  <li>asdasd sadsads sad</li>
                  <li>asdsadas sadsa dasd</li>
                  <li><del>asdasd asd</del></li>
                </ul>
                <div className="sign-up">
                  <a href="#" className="btn bordered radius">Select</a>
                </div>
              </div>
            </div>
            <div className="pricing-table gprice-single card01">
              <div className="head">
                <h4 className="title">Premium</h4>
              </div>
              <div className="content">
                <div className="price">
                  <h1>$39</h1>
                </div>
                <ul>
                  <li>asda sds ad</li>
                  <li>asda sd asd a</li>
                  <li>sad asd asd a</li>
                  <li>asd asdas das</li>
                  <li>asd asdasd asd</li>
                  <li>a sdas dasdsdsdfs sd</li>
                </ul>
                <div className="sign-up">
                  <a href="#" className="btn bordered radius">Select</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TeamJob;