import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

interface Props {
  children: React.ReactNode;
  maxWidth?: number;
  padding?: number;
}

export const LayoutContainer: React.FC<Props> = ({
  children,
  maxWidth = 600,
  padding = 16,
}) => {
  const { width } = useWindowDimensions();
  const containerWidth = Math.min(width, maxWidth);

  return (
    <View style={[styles.wrapper, { width: containerWidth, paddingHorizontal: padding }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    flex: 1,
    paddingTop: 80,
  },
});
