import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive"; 

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  ${mobile({backgroundColor:"white",color:"black", flexDirection:"column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#ededed",color:"black"})}
`;

const Title = styled.h3`
    margin-bottom:20px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
&:hover {
    text-decoration: underline;
    transform: scale(1.01);
  }
cursor: pointer;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fff8f8",color:"black"})}
`;

const ContactItem=styled.div`
margin-bottom: 15px;
display: flex;
align-items: center;
`

const Payment=styled.img`
    width:50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EEGA</Logo>
        <Desc>Buy the products from the website.We assure you Quality.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Men Fashion</ListItem>
              <ListItem>Women Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}} />RTC Busstand Road, opp HP petrol Bunk,Mahabubabad</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}} />7013621029</ContactItem>
          <ContactItem> <MailOutline style={{marginRight:"10px"}}/> contact@eega.com</ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
