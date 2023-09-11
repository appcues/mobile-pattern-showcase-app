import { router } from 'expo-router';
import { FlatList, ImageSourcePropType, StyleSheet } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import PatternCard from '../../../components/PatternCard';
import { View } from '../../../components/Themed';

type ItemData = {
  slug: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

const DATA: ItemData[] = [
  {
    slug: 'modals',
    title: 'Modals',
    subtitle:
      'Use partial and full-screen takeovers to convey branded information.',
    image: require('../../../assets/images/modals.png'),
  },
  {
    slug: 'tooltips',
    title: 'Tooltips',
    subtitle:
      'Highlight specific app elements to draw user attention and nudge action.',
    image: require('../../../assets/images/tooltips.png'),
  },
  {
    slug: 'embeds',
    title: 'Embeds',
    subtitle:
      'Inject seamless-looking experiences inline alongside your other app content.',
    image: require('../../../assets/images/embeds.png'),
  },
];

export default function Patterns() {
  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <PatternCard
        image={item.image}
        title={item.title}
        subtitle={item.subtitle}
        onPress={() => router.push(`/patterns/${item.slug}`)}
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
