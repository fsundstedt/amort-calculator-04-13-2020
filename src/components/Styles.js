import styled from 'styled-components';

export const Background = styled.div`
  display: flexbox;
  justify-content: center;
  margin: 0px;
  background-color: rgba(0,0,0,0.2);
  min-height: 667px;
`;

export const Main = styled.div`
  display: flexbox;
  background-color: rgba(0,10,255,0.5);
  min-height: 667px;
  max-width: 375px;
  margin: 2%;
  padding: 2%;
  border-radius: 20px;
  font-family: "Lato",sans-serif;
  justify-content: center;
`;

export const Form = styled.form`
  display: flexbox;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Title = styled.h2`
  display: flex;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const Button = styled.button`
    width: 100%;
    height: 20%;
    padding: 2%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 5px;
    border: none;
    &:hover{
      background-color: #b4cae3;
      border: 1px solid;
      border-radius: 5px;
      color: white;
    }
`;

export const DefaultStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 0%;
  margin-right: 0%;
  padding: 2%;
  font-size: 0.8rem;
  border-radius: 5px;
`;

export const Inputbox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  margin-top: 4%;
  margin-left: 0%;
  margin-right: 0%;
  border-radius: 5px;
  padding: 2%;
`;

export const Inputs = styled.div`
  display: flexbox;
  padding: 2%;
`;

export const Input = styled.input`
  max-width: 100px;
  margin-left: 5%;
  background-color: none;
  border-style: none;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  margin: 2%;
  background: #fff;
  background-color: white;
`;

export const Payment = styled.div`
  margin: 2%;
`

export const Border = styled.div`
  margin: 2%;
  border-radius: 5px;
  background-color: white;
`