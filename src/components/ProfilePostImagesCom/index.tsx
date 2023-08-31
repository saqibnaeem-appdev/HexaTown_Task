import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {images} from '@assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ProfilePostImages: FC = () => {
  const data = [
    {
      key: 'image1',
      source: images.image1,
    },
    {
      key: 'image2',
      source: images.image2,
    },
    {key: 'image3', source: images.image3},
    {key: 'image4', source: images.image4},
    {
      key: 'image1',
      source: images.image1,
    },
    {
      key: 'image2',
      source: images.image2,
    },
  ];

  function renderPostImages({item}) {
    return (
      <TouchableOpacity style={styles.postImageContainer}>
        <Image source={item.source} style={styles.postImage} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderPostImages}
        numColumns={3}
        contentContainerStyle={{paddingBottom: 60}}
      />
    </View>
  );
};

export default ProfilePostImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImageContainer: {
    margin: 1,
    flex: 1,
    alignItems: 'center',
  },
  postImage: {
    height: 140,
    width: wp(33),
  },
});
