import Home from './Home';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';


function App() {
    return (
        <RecoilRoot>
            <Home />
        </RecoilRoot>
    );
}
export default App