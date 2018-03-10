import { configure } from '../node_modules/enzyme';
import Adapter from '../node_modules/enzyme-adapter-react-16';

configure({ adapter: new Adapter() });