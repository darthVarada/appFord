import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';


const screens = ({

    login:{
		screen: login,
		navigationOptions:{
			title:'login',
		}
	},

});

const MainNavigator = createStackNavigator (screens,{


});
export default createAppContainer(MainNavigator);