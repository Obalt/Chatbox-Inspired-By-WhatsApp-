import styled from "styled-components"; 
import Head from "next/head";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";


function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/178192/910/607/m1/fpnw/wm0/chat-box-logo.-preview-02-.png?1409954903&s=3d85410a80aeaf2b49c4e7581846e034' />
        <Button onClick={signIn} variant='outlined'>
          Sign in with Google
        </Button>
      </LoginContainer>

      <Author>
        
        <Button>
          By Sithembiso Radebe
        </Button>
      </Author>
    </Container>
  );
}

export default Login; 

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
object-fit: contain;
background-color: whitesmoke;



`;

const LoginContainer = styled.div`
  padding: 100px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #191919;
  border-radius: 100%;
  box-shadow: 0px 4px 9px;
`;

const Logo = styled.img`
height: 300px;
width: 300px;
margin-bottom: 50px;
border-radius: 100%;

`

const Author = styled.div `

margin-top:-40px;
f


`


