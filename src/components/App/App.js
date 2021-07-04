import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import PlanetSection from '../PlanetSection/PlanetSection';

const App = () => {
    return (
        <Provider>
            <Wrapper>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <PlanetSection />
                        </Route>
                    </Switch>
                </Router>
            </Wrapper>
        </Provider>
    );
};

export default App;
