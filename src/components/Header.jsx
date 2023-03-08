import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Default from "./Default";
import Loader from './Loader'
import Result from "./Result";


let laptop = "1024px";
let Plan = "768px";

export const Head = styled.header`
  width: 100%;
  min-height: 100vh;
  background: #b2fefa;
  background: -webkit-linear-gradient(to right, #0ed2f7, #b2fefa);
  background: linear-gradient(to right, #0ed2f7, #b2fefa);
`;
export const WritingField = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
  text-align: center;
  @media (max-width:${Plan}){
    margin: 0;
    padding: 6px 0;
  }
`;
export const Title = styled.h1`
  color: #2e2549;
  text-transform: uppercase;
  margin: 15px 0;
`;
export const Field = styled.div`
  max-width: 850px;
  background-color: #ffffffa7;
  margin: 0 auto;
  padding: 15px 10px;
  border-radius: 10px;
  display: flex;
  @media (max-width: ${laptop}) {
    max-width: 650px !important;
  }
  @media (max-width: ${Plan}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const InputField = styled.div`
  width: 100%;
  padding: 7px;
  border-radius: 10px;
  background-color: #ffffff;
  @media (max-width:${Plan}){
    padding: 5px !important;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 5px;
  outline: none;
  border: none;
  font-size: 18px;
`;
export const GenerateBtn = styled.div`
  padding: 14px 15px;
  margin-left: 7px;
  font-size: 17px;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 7px;
  background: #6190e8;
  background: -webkit-linear-gradient(to right, #a7bfe8, #6190e8);
  background: linear-gradient(to top, #a7bfe8, #6190e8);
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  :active {
    background: linear-gradient(to top, #6190e8, #a7bfe8);
  }
  @media (max-width:${Plan}){
    width: 100%;
    padding: 7px 11px;
    margin:7px 0 0 0;
  }
`;
export const Results = styled.div`
  max-width: 850px;
  margin: 15px auto;
  padding: 10px;
  border-top: 2px solid #ffffff;
  border-radius: 8px;
  @media (max-width: ${laptop}) {
    max-width: 650px !important;
  }
`;

const Header = () => {
  const [check, setCheck] = React.useState(0);
  const [loading, setLoading] = React.useState(false)
  const [imageUrl, setImageUrl] = React.useState('')
  const value = React.useRef()
  const generateImage = async () =>{
    try{
      setImageUrl("")
      let words = value.current.value
      let data = `{
        "inputs":"${words}"
      }`
      setCheck((prev)=>prev + 1)
      setLoading(true)
      const response = await fetch("https://api-inference.huggingface.co/models/prompthero/openjourney", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json',
        },
        body: data,
    });
    if(!response.ok){
      throw new Error('Failed')
    }
      const blob = await response.blob()
      setImageUrl(URL.createObjectURL(blob))
      setLoading(false)
      console.log(imageUrl);
    }catch{

    }
  }
  return (
    <Head>
      <Container style={{ padding: "10px" }}>
        <WritingField>
          <Title>IMAGE GENERATOR AI</Title>
          <Field>
            <InputField>
              <Input type="text" placeholder="write your prompt..." ref={value}/>
            </InputField>
            <GenerateBtn onClick={()=>generateImage()}>Generate</GenerateBtn>
          </Field>
        </WritingField>
        <Results>{check === 0 ? <Default /> : ""}
        {loading ? (<Loader/>):""}
        {imageUrl !== "" ?<Result source={imageUrl}/> : ""}
        </Results>
      </Container>
    </Head>
  );
};

export default Header;
