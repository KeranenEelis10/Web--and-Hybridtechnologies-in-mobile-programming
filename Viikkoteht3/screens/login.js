import React from 'react';
import { View } from 'react-native';
import { MainAppbar } from '..mainAppBar';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
    // State for form data
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    // Function to handle form input changes
    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // Validation and submit logic here
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