import {Image, StyleSheet, Text, View} from 'react-native';

// Define the TypeScript interface for component props
interface PropPokemon {
  pokemon: string;
  image: any; // Use `any` or `ImageSourcePropType` for image props
  type: string;
  weakness: string[];
  color: string; // More specific array type
}

export default function PokemonCard({
  pokemon,
  image,
  type,
  weakness,
  color,
}: PropPokemon) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.wrapper}>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{pokemon}</Text>
          <Text style={styles.hpText}>HP</Text>
        </View>
        <View style={styles.typeWrapper}>
          <View style={[{borderColor: color}, styles.typeContainer]}>
            <Text style={[styles.typeText, {color: color}]}>{type}</Text>
          </View>
        </View>
        <View style={styles.itemsWrapper}>
          {weakness.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={{fontSize:20}}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    margin: 20,
    borderRadius: 50,
    overflow: 'hidden', // Ensures rounded corners for child components
  },
  image: {
    width: '100%',
    height: 200, // Specify height to maintain aspect ratio
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  wrapper: {
    padding: 20,
  },
  nameText: {
    fontSize: 25,
  },
  hpText: {
    fontSize: 20, // Adjust size if needed
  },
  typeWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  typeContainer: {
    padding: 10,
    borderWidth: 2,
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
  },
  typeText: {
    fontSize: 18,
    fontWeight: 'bold', // Adjust size if needed
  },
  itemsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // width: 50, // Adjust width if needed
  },
});
