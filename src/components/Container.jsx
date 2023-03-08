import styled from "styled-components";
const laptop = '1200px'
const Container  = styled.div`
    width:1200px;
    margin:0 auto;
    @media (max-width:${laptop}){
        width:100%;
        margin:0;
    }
`
export default Container;