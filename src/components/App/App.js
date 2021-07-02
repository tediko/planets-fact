import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';

const App = () => {
    return (
        <Provider>
            <Wrapper>
                <Navbar />
            </Wrapper>
        </Provider>
    );
};

export default App;
