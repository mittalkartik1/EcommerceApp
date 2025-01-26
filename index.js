/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import App from './src/screens/App';

Navigation.registerComponent('Home', () => App);
Navigation.events().registerAppLaunchedListener(async () => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Home',
             },
           },
         ],
       },
     },
  });
});
