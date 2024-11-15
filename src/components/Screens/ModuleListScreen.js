import {Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../Layout/Screen.js';

import initialModules from '../../Data/Modules.js';

const ModuleListScreen = () => {
  // Initialisations-----------------
  const modules = initialModules; 
  // State---------------------------
  // Handlers------------------------
  const handleSelect = () => alert ("Item selected");

  // View----------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module)=>{
          return(
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>  
 );
};

const styles = StyleSheet.create({
  container:{},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize:16,
  },
});

export default ModuleListScreen;
