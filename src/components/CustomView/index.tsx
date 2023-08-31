// CustomView.tsx

import React, {FC} from 'react';
import {View, Text, ViewStyle, TextStyle, Pressable} from 'react-native';

interface CustomViewProps {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  headerText: string;
  headerTextStyle?: TextStyle;
  onPress: () => void;
}

const CustomView: FC<CustomViewProps> = ({
  text,
  containerStyle,
  textStyle,
  headerTextStyle,
  headerText,
  onPress,
}) => {
  return (
    <Pressable style={[containerStyle]} onPress={onPress}>
      {headerText ? <Text style={[headerTextStyle]}>{headerText}</Text> : null}
      <Text style={[textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default CustomView;
