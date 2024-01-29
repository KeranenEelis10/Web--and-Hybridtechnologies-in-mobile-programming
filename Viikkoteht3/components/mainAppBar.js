import React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppbar = ({ title }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export { MainAppbar };