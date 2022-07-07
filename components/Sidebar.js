import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components"
import {Chat, Search } from "@mui/icons-material";
import { MoreVertRounded } from "@mui/icons-material";
import * as EmailValidator from "email-validator";
import { auth } from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollection} from "react-firebase-hooks/firestore"
import {db} from "../firebase"
import Chats from "../components/Chats"



function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db.collection('chats').where('users', 'array-contains', user.email)
  const [chatsSnapshot] = useCollection(userChatRef);

const createChat = () => {
const input = prompt('Please enter the email address of the person you want to chat with'); 

if(!input) return null;

if(EmailValidator.validate(input) && !chatAlreadyExists (input) && input !==user.email) {

    //Add chat to db collection
    db.collection('chats').add({
      users: [user.email, input],
    })
}




}

const chatAlreadyExists = (recipientEmail) => 
  !!chatsSnapshot?.docs.find (
  (chat) => 
  chat.data().users.find((user) => user === recipientEmail)?.length >0
  
  )
  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()}  />
        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
              <MoreVertRounded/>
          </IconButton>


       
        </IconsContainer>
      </Header>
      <Sach>
          <Search/>
          <SearchInput placeholder="Search in chats"/>
      </Sach>

      <SidebarButton onClick={createChat}>
          Start a new chat
      </SidebarButton>

      {/* List of chats */}
{chatsSnapshot?.docs.map((chat) => (
  <Chats key={chat.id} id={chat.id} users={chat.data().users} />

))}
  
  
    </Container>
  );
}

export default Sidebar; 

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 280px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Sach = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px;

`;

const SearchInput = styled.input`
outline-width:0;
border: none;
flex: 1;


`

const SidebarButton = styled(Button) `
width:100%; 
border-top: 1px solid whitesmoke;
border-bottom: 3px solid whitesmoke;

`;



const Header = styled.div`
display:flex;
position: sticky;
top: 0;
background-color: transparent;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar) `
cursor: pointer;

:hover {
    opacity: 0.6;
}

`
const IconsContainer = styled.div``;

