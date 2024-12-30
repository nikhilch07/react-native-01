import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    const cardsList = [
        { key: 'swipe', color: 'red' },
        { key: 'me', color: 'red' },
        { key: 'to', color: 'red' },
        { key: 'see', color: 'red' },
        { key: 'more', color: 'red' },
        { key: '😀', color: 'red' }
    ]
    return (
        <View>
            <Text style={styles.heading}>ElevatedCards</Text>
            <FlatList
              horizontal
              ItemSeparatorComponent={
                (({highlighted}) => (
                  <View
                    style={[styles.separator, highlighted]}
                  />      
               
                ))
            
              }
                data={cardsList}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: item.color }]}>
                        <Text> {item.key}</Text>
                    </View>
                )}
   
          
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center'
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'balck',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: .5,
        shadowRadius: 2,
    },
    separator: {
        height: 100,
        width: '1%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
})