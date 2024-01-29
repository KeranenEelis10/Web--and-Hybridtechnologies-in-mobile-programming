import React from 'react';
import { View } from 'react-native';
import { MainAppbar } from '../components/mainAppBar';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        // Submitti
    };

    return (
        <View style={{ flex: 1 }}>
            <MainAppbar title="Login" />
            <View style={{ padding: 16 }}>
                <TextInput
                    label="Username"
                    value={formData.username}
                    onChangeText={text => handleInputChange('username', text)}
                />
                <TextInput
                    label="Password"
                    value={formData.password}
                    onChangeText={text => handleInputChange('password', text)}
                    secureTextEntry
                />
                <Button mode="contained" onPress={handleSubmit}>
                    Submit
                </Button>
            </View>
        </View>
    );
};

export default Login;