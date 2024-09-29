import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './Order';
import PostsCreated from './PostsCreated';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Order />} />            
        <Route path="/posts-created" element={<PostsCreated />} /> 
        <Route path="/order-history" element={<Order />} /> 
      </Routes>
    </Router>
  );
}

export default App;
