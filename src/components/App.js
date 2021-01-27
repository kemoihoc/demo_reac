import React from 'react';
import Sort from './Sort';
import Search from './Search';
import './App.css';
import postData from '../data.json';
import {Provider} from './Context';

class App extends React.Component {

constructor() {
    super()
    this.state = {doctors: []}
}    
state = {
    sort: 0,
    doctors: [],
    filtered: false
}
fetchDoctors = () => {
    this.setState({doctors: postData});
}

addSort = (sortType) => {
    this.setState({sort: sortType});
}

addFilter = (filterType) => {
    this.setState({filter: filterType});
}

renderSearch = () => {
    return <Search />
}

renderSort = () => {
    return <Sort/>
}
componentDidMount = () => {
    this.fetchDoctors()
}

renderDoctors() {
    const data  = this.state.doctors;
    
    if(this.state.sort == 0){
        data.sort((a,b) => b.distance  - a.distance);
    }else{
        data.sort((a,b) => b.rating - a.rating);
    }
    let filter = this.state.filter;
    let doctors = data;

    if(filter){
        doctors = data.filter((item) => item.language.includes(filter));
    }    

    return ( <div className="wrapper" ><ul> {
            doctors && doctors.length > 0 && doctors.map(item => 
                    <li className="list_item row">
                        <div className = "img column">
                            <img src={item.avatar ? item.avatar : '../../no_image.png'} />
                        </div>
                        <div className = "info column">
                            <h3>{ item.display_name } </h3>
                            <p>
                                <span className="rating"><img src='./star.png'/><img src='./star.png'/><img src='./star.png'/><img src='./star.png'/><img src='./star.png'/></span>
                                <span className="rating_value">{item.rating} 30 benh nhan</span>
                            </p>
                            <p><span className="clinic_name">{item.clinic_name}</span></p>
                            <p>{item.specialty.map((item1, index) =>
                                <span>{index > 0 ? ',' : ''} {item1.name}</span>
                            )}</p>
                            <p>{item.clinic_address}</p>
                        </div>
                    </li>
            )
        } </ul></div>
    );
}

render() {
    const contextValue = {
        sort:this.state.sort,
        addSort: this.addSort,
        addFilter: this.addFilter,
        filter:this.state.filter
    }
    return (
        <Provider value={contextValue}>  
            <div>
                <h3 className="titleApp"> Danh sách bác sĩ </h3> 
                <div className="row"> 
                    <Sort /> 
                    <Search />
                </div>
                {this.renderDoctors()}
            </div>
      </Provider>
    )
  }
}
export default App
