import Header from "./components/Header";
import FriendPost from "./components/FriendPost";
import FriendList from "./components/FriendList";
import SuggestionsList from "./components/SuggestionsList";
import { Container, Box } from "@mui/material";

export default function App() {
  const friends = [
    { id: 1, name: "João", mutualFriends: 2, image: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w" },
    { id: 2, name: "Pedro", mutualFriends: 3, image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "Joana", mutualFriends: 1, image: "https://th.bing.com/th/id/OIP.ENIN8L2HjOG7nogJc7KrvQHaHw?rs=1&pid=ImgDetMain" }
  ];

  const suggestions = [
    { id: 1, name: "Maria", mutualFriend: "João", image: "https://images.pexels.com/photos/460295/pexels-photo-460295.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, name: "Fernando", mutualFriend: "Joana", image: "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "Ricardo", mutualFriend: "Pedro", image: "https://th.bing.com/th/id/OIP.eVQqUbLayb6DS_wbwHU9LQAAAA?rs=1&pid=ImgDetMain" }
  ];

  return (
    <Container>
      <Header/>
      <Box 
        component="main" 
        sx={{
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
        }}
        margin={1}
      >
        <FriendList friends={friends} />
        <Box component="section" sx={{ flexGrow: 1 }}>
          <FriendPost
            image="https://th.bing.com/th/id/OIP.7CVJ2d29GvD0CjmojqgOQAHaE8?rs=1&pid=ImgDetMain"
            title="Olha essa paisagem!"
            subtitle="Linda né?"
            imageOfAuthor="https://th.bing.com/th/id/OIP.ENIN8L2HjOG7nogJc7KrvQHaHw?rs=1&pid=ImgDetMain"
            author="Joana"
            date="12/09/2024"
            description="Essa foi minha viagem para o Japão. Foi incrível!"
            likes={10}
            shares={2}
            comments={["Cenário legal demais!", "Incrível."]}
          />
        </Box>
        <SuggestionsList suggestions={suggestions} />
      </Box>
    </Container>
  );
}
