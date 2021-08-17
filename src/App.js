import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "reactstrap";
import CartDetail from "./components/cart/CartDetail";
import Navi from "./components/navi/Navi";
import AddOrUpdateProduct from "./components/products/AddOrUpdateProduct";
import Dashboard from "./components/root/Dashboard";
import NotFound from "./components/common/NotFound";

function App() {
  return (
   
   <Container>
     <Navi></Navi>
     <Switch>
<Route path="/" exact component={Dashboard}/>
<Route path="/product" exact component={Dashboard}/>
<Route path="/cart" exact component={CartDetail}/>
<Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
<Route path="/saveproduct" exact component={AddOrUpdateProduct}></Route>
<Route component={NotFound} />
     </Switch>
   
   </Container>
  );
}

export default App;
