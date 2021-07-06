import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
