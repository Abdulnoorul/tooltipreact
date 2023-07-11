import React from 'react';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                Showing Hovering Position that you selceted
            </div>
        )
    }
}


export default Tooltip;