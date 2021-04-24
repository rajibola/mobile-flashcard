import React from 'react';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { colors } from '../constants';
import { wp } from '../utils';
import { headerStyles as styles } from './styles';

export const Header = ({ title, subtitle, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <SimpleLineIcons
          name='arrow-left'
          size={wp(22)}
          color={colors.blackOpacity(0.7)}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />

        <Entypo
          name='home'
          size={wp(24)}
          color={colors.blackOpacity(0.9)}
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
        />
      </View>

      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
    </View>
  );
};
