import { registerRootComponent } from 'expo';
import App from './src/App';
import { NavigationContainer } from '@react-navigation/native';

const AppComponent = () => {
    return <NavigationContainer>
        <App />
    </NavigationContainer>
}

registerRootComponent(AppComponent);
