import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';

export default function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -5,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

IconWithBadge.propTypes = {
  name: PropTypes.string.isRequired,
  badgeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

IconWithBadge.defaultProps = {
  badgeCount: null,
};
