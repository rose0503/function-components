import React, {  Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button 
} from 'reactstrap';
import Login from './components/Login'
import Book from './components/Book'
import User from './components/User'
import Transaction from './components/Transaction'
import Manageshop from './components/Manageshop'
import Myshop from './components/Myshop'
import Cart from './components/Cart'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isOpen: false,
      setIsOpen: false,



    };
    // const [isOpen, setIsOpen] = useState(false);
    
  }
  componentDidMount() {
    fetch("https://lesson-27-rest-api-2.glitch.me/api/books")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            items: result.books,
            
          });
        },
      );
  }
  render()  {
    const { items, isOpen, setIsOpen } = this.state;
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="App">
        <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">BOOKSTORE</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="#">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Book</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Users</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Transactions</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Cart</NavLink>
                  </NavItem>              
                </Nav>
                <NavbarText><Button id="login" color="link" href="#">Đăng nhập</Button></NavbarText>
              </Collapse>
            </Navbar>
        </div>
        <Login />
        <Book books={items}/>
        <User />
        <Transaction />
        <Manageshop />
        <Myshop />
        <Cart />
      </div>
    );
  }
}

export default App;
