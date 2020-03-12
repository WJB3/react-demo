import React  from 'react';
 
export default class Test extends React.Component{

    
    render(){

        const styleObj={
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
            fontSize:50,
            color:'skyblue',
            width:'100%',
            height:'100%',
            backgroundColor:"blue"
        }
    
        return(
            <div style={styleObj}>
                Hello React
            </div>
        )
    }
}