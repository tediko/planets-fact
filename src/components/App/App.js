import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import Mercury from '../../pages/Mercury/Mercury';
import Venus from '../../pages/Venus/Venus';
import Earth from '../../pages/Earth/Earth';
import Mars from '../../pages/Mars/Mars';
import Jupiter from '../../pages/Jupiter/Jupiter';
import Saturn from '../../pages/Saturn/Saturn';
import Uranus from '../../pages/Uranus/Uranus';
import Neptune from '../../pages/Neptune/Neptune';
import KeyVisual from '../KeyVisual/KeyVisual';

const App = () => {
    const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/');

    return (
        <Provider>
            <Wrapper>
                <Navbar
                    pathName={location.pathname}
                    onHover={setActivePlanet}
                    activePlanet={activePlanet}
                />
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/mercury">
                            <Mercury />
                        </Route>
                        <Route exact path="/venus">
                            <Venus />
                        </Route>
                        <Route exact path="/earth">
                            <Earth />
                        </Route>
                        <Route exact path="/mars">
                            <Mars />
                        </Route>
                        <Route exact path="/jupiter">
                            <Jupiter />
                        </Route>
                        <Route exact path="/saturn">
                            <Saturn />
                        </Route>
                        <Route exact path="/uranus">
                            <Uranus />
                        </Route>
                        <Route exact path="/neptune">
                            <Neptune />
                        </Route>
                        <Route exact path="/">
                            <KeyVisual activePlanet={activePlanet} />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Wrapper>
        </Provider>
    );
};

export default App;
