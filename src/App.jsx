import Todos from "./components/Todos/Todos";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className='container p-5'>
          <Route 
            path="/"
            component={Todos}/>
        </div>
      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
