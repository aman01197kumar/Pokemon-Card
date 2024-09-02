import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PokemonCard from './components/PokemonCard';
import {pokemonData} from './assests/pokemonData';

export default function App() {
  return (
    <View>
<View style={{alignItems:'center', marginTop:12}}>
  <Text style={{fontWeight:'900', fontSize:32}}>Pokemons</Text>
</View>
    <ScrollView>

      {pokemonData?.map(({pokemon, image, type, weakness, color}, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          image={image}
          type={type}
          weakness={weakness}
          color={color}
          />
        ))}
    </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({});
