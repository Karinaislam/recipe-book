import React, { Component } from 'react';
import './Submitbox.css'
class Submitbox extends Component {
    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <div>
                    <form>

                        <input type="text" placeholder="Recipe"></input>
                       <br/>
                       <br/>
                        <textarea type="text" placeholder="Ingredients"></textarea>
                      <br/>
                        <button>Submit</button>
                        <button>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Submitbox;