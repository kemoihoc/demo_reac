import React,{Component} from 'react';
import {AppContext} from './Context';

export default class Sort extends Component {
    static contextType = AppContext;   
    state = {
        text: "Khoảng cách"
    }
    handleTyping = (e) => {
        this.context.addSort(e.target.value);
        if(e.target.value == 0){
            this.setState({text: "Khoảng cách"});
        }else{
            this.setState({text: "Đánh giá"});
        }
    }
    render() {
        return ( 
            <div className="column">
                <label className="titleSort">Sắp xếp theo</label>
                <div className="dropdown">
                    <form>
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.text}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <ul className="sortData">
                            <li>
                                <input type="radio" name="order" value="0" onChange={this.handleTyping}/> Khoảng cách
                            </li>
                            <li><input type="radio" name="order" value="1" onChange={this.handleTyping}/> Đánh giá</li>
                        </ul>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}