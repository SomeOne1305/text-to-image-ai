import styled from 'styled-components'
import {ArrowUpRightSquare} from 'react-bootstrap-icons'

export const ResultW = styled.div`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
`

export const ImageBlock = styled.div`
  max-width: 800px;
  max-height: 800px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Show = styled.a`
  position: absolute;
  bottom: 5px;
  right: 0;
  padding: 6px 10px;
  font-size: 22px;
  color: #ffffff;
  background-color: #000000ac;
  border-radius: 5px;
`
export const Download = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  text-align: center;
  background: #6190E8;
  background: -webkit-linear-gradient(to top, #A7BFE8, #6190E8);  
  background: linear-gradient(to top, #A7BFE8, #6190E8);
`
export const DownloadButton = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
`

const Result = ({source}) => {
  return (
    <ResultW>
      <ImageBlock>
        <Image src={source} alt=""/>
        <Show href={source} target='_blank' referrerPolicy='no-referrer'>
          <ArrowUpRightSquare/>
        </Show>
      </ImageBlock>
      <Download>
        <DownloadButton href={source} download>Download</DownloadButton>
      </Download>
    </ResultW>
  )
}

export default Result