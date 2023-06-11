import React, { Component } from 'react'

import './notfound.css'

// const NotFound = () => {
//   return (
//     <section>
        
//     </section>
//   )
// }


class NotFound extends Component{


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //     }

    // }

    // componentDidMount() {

    //     fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(res => res.json())
    //     .then(json => {
    //         this.setState({
    //             isLoaded: true,
    //             items: json,
    //         })
    //     })
    // }

    render(){

        // var { isLoaded, items } = this.state;

        // if (!isLoaded) {
        //     return <div>Loading...</div>;
        // }

        return(
            <section className="notfound">
                 <div className='notfound_table'>
                    <table>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest top3">401</h1>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest top2">402</h1>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest top1">403</h1>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <h1 class="txt center">Page not Found &nbsp;</h1>
                            </th>
                            <th>
                                <h1 class="txt center">404</h1>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest bottom1">405</h1>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest bottom2">406</h1>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <h1 class="txt rest bottom3">407</h1>
                            </th>
                        </tr>
                    </table>
                <a href="javascript:history.back()" className='btn About_Page'>Go Back</a>
                </div>
 
                {/* <ul>
                    <img className='dog' src={items.message} alt="dog" />
                </ul> */}
                <h1 className="sidetext">404</h1>
            </section>
        )
    }
}


export default NotFound