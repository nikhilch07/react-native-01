import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.heading}>Flat Cards</Text>
=                <FlatList
                data={[{ key: 'Red' }, { key: 'Green' }, { key: 'Blue' }]}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.card, { backgroundColor: item.key.toLowerCase() }]}>
                            <Text style={styles.cardText}>{item.key}</Text>
                        </View>
                    )
                }}
                >
                </FlatList>
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
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        width: 100,
        height: 100,
        color: 'white',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: 'white'
    },
})