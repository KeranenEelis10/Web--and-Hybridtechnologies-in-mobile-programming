import { StyleSheet, StatusBar } from "react-native";
import constants from "constants";


const styles = StyleSheet.create({
    container: {
        paddingTop: constants.StatusBar,
        flex: 1,
        backgroundColor: '#fff',
    },
    message: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    messageInfo: {
        fontSize: 12
    }
})

export default styles