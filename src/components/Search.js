import React from 'react';
import {AppContext} from './Context';

class Search extends React.Component {
    static contextType = AppContext;
    state = {
        sort: "",
        text: "Ngôn ngữ"
    }
    handleTyping = (e) => {
        this.context.addFilter(e.target.value);
        if(e.target.value == 'vi'){
            this.setState({text: "Tiếng Việt"});
        }else if(e.target.value == 'en'){
            this.setState({text: "English"});
        }else{
            this.setState({text: "Fanceis"});
        }
    }
    render() {
        return ( 
            <div className="column">
                <label className="titleFilter">Lọc kết quả</label>
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.text}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>
                        <li><input type="radio" name="filter" value="vi" onChange={this.handleTyping}/> Tiếng Việt</li>
                        <li><input type="radio" name="filter" value="en" onChange={this.handleTyping}/> English</li>
                        <li><input type="radio" name="filter" value="fr" onChange={this.handleTyping}/> Fanceis</li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;