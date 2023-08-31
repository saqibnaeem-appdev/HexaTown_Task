import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DownArrow, Plus, UpArrow} from '@assets';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomView} from '@components';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const StoryHighlights = () => {
  const [storyTapped, setStoryTapped] = useState(false);

  function showStoryHandler() {
    if (storyTapped) setStoryTapped(false);
    else setStoryTapped(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <Text style={styles.storyHighlightsText}>Story highlights</Text>
        {storyTapped ? (
          <TouchableOpacity onPress={showStoryHandler}>
            <UpArrow width={10} height={10} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={showStoryHandler}>
            <DownArrow width={20} height={20} />
          </TouchableOpacity>
        )}
      </View>

      {storyTapped ? (
        <View>
          <Text style={styles.text}>
            Keep your favorite stories on your profile
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.highlightsMainContainer}>
              <View style={styles.addHighlightContainer}>
                <TouchableOpacity style={styles.addHighlight}>
                  <Plus width={30} height={30} />
                </TouchableOpacity>
              </View>
              <CustomView containerStyle={styles.View} />
              <CustomView containerStyle={styles.View} />
              <CustomView containerStyle={styles.View} />
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default StoryHighlights;

const styles = StyleSheet.create({
  highlightsMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(90),
    marginVertical: 10,
  },
  container: {
    marginHorizontal: 18,
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  addHighlight: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addHighlightContainer: {},
  storyHighlightsText: {
    fontSize: hp(2),
    fontWeight: '500',
    color: theme.text.black,
  },
  View: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: theme.comBackground.secondary,
  },
  text: {
    color: theme.text.darkGray,
    fontSize: hp(1.5),
    fontWeight: '500',
  },
});
