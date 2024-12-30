import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import cricketersInfo from '../mocks/cricketerInfo.json';

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.heading}>Trending Cricketers</Text>
            <FlatList
                horizontal
                data={cricketersInfo}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                        </View>
                        <View style={styles.cricketerName}>
                            <Text style={styles.cricketerName}>{item.name}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>Age: </Text> <Text style={styles.valueText}>{item.age}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>Country: </Text><Text style={styles.valueText}> {item.country}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>Runs: </Text> <Text style={styles.valueText}>{item.runs_scored}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>50's: </Text> <Text style={styles.valueText}>{item.half_centuries}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>100's: </Text> <Text style={styles.valueText}>{item.centuries}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>Average: </Text> <Text style={styles.valueText}>{item.average}</Text>
                        </View>
                        <View style={styles.stats}>
                            <Text style={styles.keyText}>Strike Rate: </Text> <Text style={styles.valueText}>{item.strike_rate}</Text>
                        </View>
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
        width: 300,
        height: 500,
        backgroundColor: '#EA7773',
        borderRadius: 10,
        margin: 10,
        elevation: 5,
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: 'stretch',
        borderTopRightRadius: 50,
    },
    cricketerName: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    stats:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 5,
    },
    keyText: {
        color: '#4C4B4B',
        fontFamily: 'monospace',
        fontSize: 16,
        fontWeight: 'bold'
    },
    valueText: {
        color: 'white',
        fontFamily: 'calibri',
        fontWeight: 'semibold',
    }
})