import React from 'react';
import { View} from 'react-native';
import { useTheme } from '../context/useTheme';
import styles from '../styles';
import ThemeSwitchButton from '../components/themeSwitchButton';

const SettingsScreen = () => {
  const { isDarkMode } = useTheme()
  return (
    <View style={[ styles.container, isDarkMode ? styles.dark : styles.light ]}>
      <ThemeSwitchButton/>
    </View>
  );
};

export default SettingsScreen;