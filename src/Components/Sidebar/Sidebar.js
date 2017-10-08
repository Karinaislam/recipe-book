import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
               <button>Add a New Recipe </button><br/>
               <button>Show All Recipe</button><br/>
               <button>Remove All Recipe</button> 
            
                <br/>

                <h4>Recipe List</h4>
                <button> Noodles Soup </button><br/>
               <button>Sandwich</button><br/>
               <button>Donuts</button>



            </div>
        );
    }
}

export default Sidebar;