import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';

const App = () => {
    return (
        <Provider>
            <Wrapper>
                <h1>Hello World!</h1>
            </Wrapper>
        </Provider>
    );
};

export default App;
