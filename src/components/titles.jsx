import React from 'react';

class Titles extends React.Component{

    render(){
        return (
            <div>
                <h1 className="title-container__title">Weather finder</h1>
                <p className="title-container__subtitle">Find out temprature, conditions and more ...</p>
            </div>
        )
    }
}

export default Titles;

// //-------------------------another way to do it

// function Titles (props)
// {
//     return (
//         <div>
//             <h1>Weather finder</h1>
//             <p>Find out temprature, conditions and more ...</p>
//         </div>
//     )
// }

// export default Titles;

// //-------------------------another way to do it
// const Titles = props=> (
//     <div>
//         <h1>Weather finder</h1>
//         <p>Find out temprature, conditions and more ...</p>
//     </div>
// )

// export default Titles;