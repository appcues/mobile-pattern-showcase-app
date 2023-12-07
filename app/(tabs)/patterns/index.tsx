import { router } from 'expo-router';
import { FlatList, ImageSourcePropType, StyleSheet } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import PatternCard from '../../../components/PatternCard';
import { View } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

type ItemData = {
  slug: 'modals' | 'tooltips' | 'embeds';
  image: ImageSourcePropType;
};

const DATA: ItemData[] = [
  {
    slug: 'modals',
    image: require('../../../assets/images/modals.png'),
  },
  {
    slug: 'tooltips',
    image: require('../../../assets/images/tooltips.png'),
  },
  {
    slug: 'embeds',
    image: require('../../../assets/images/embeds.png'),
  },
];

export default function Patterns() {
  const { language, strings } = useLocale();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <PatternCard
        image={item.image}
        title={strings[language].patterns.list[item.slug].title}
        subtitle={strings[language].patterns.list[item.slug].subtitle}
        onPress={() => router.push(`/patterns/${item.slug}`)}
        testID={`${item.slug}-card`}
        style={{
          marginBottom: 20,
          marginHorizontal: 20,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <WrappedAppcuesFrameView frameID="patterns-root" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
