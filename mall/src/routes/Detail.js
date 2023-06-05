import { useParams } from "react-router-dom";
import styled from 'styled-components';

// Styled Component to replace css file
// let YellowBtn = styled.button`
//     background : ${ props => props.bg };
//     color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//     padding: 10px;
// `

// let NewBtn = styled.button(YellowBtn)`
//     background : orange;
// `

function Detail(props) {

    let {id} = useParams();
    let item = props.shoes.find(function(x) {
        return x.id == id
    });
    // props.shoes.find((x) => x.id == id )

    return (
        <div className="container">
            {/* <YellowBtn bg="blue">button</YellowBtn> */}
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>${item.price}</p>
                    <button className="btn btn-danger">Order</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;