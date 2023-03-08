import styled from "styled-components";
import { Images } from "react-bootstrap-icons";

let media = '768px'
let mob = '425px'

export const OnDefault = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #383737;
  font-size: 30px;
  @media (max-width:${media}){
    max-height: 300px;
  }
  @media (max-width:${mob}){
    font-size: 18px;
  }
`;
export const Div = styled.div`
  text-align: center;
`
const Default = () => {
  return (
  <OnDefault>
    <Div>
    <Images size={22} color="#383737"/>
    Image displays there
    </Div>
  </OnDefault>);
};

export default Default;
