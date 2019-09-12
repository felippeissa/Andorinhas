import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/signIn/index';
import SignUp from './pages/signUp/index';
import Main from './pages/main/index';

const Routes = createStackNavigator({
SignIn,
SignUp,
Main
});

const RoutesCtn = createAppContainer(Routes);

export default RoutesCtn;