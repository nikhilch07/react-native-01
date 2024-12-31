import React, { useCallback } from 'react'
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    Linking,
    TouchableOpacity,
    View
} from 'react-native';
import cricketersInfo from '../mocks/cricketerInfo.json';

export default function FancyCards() {

    const openProfile = useCallback(async (url: string) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            console.log('URL is supported');
            Linking.openURL(url);
        } else {
            console.log('URL is not supported');
        }
    }, []);

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

                        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                            <TouchableOpacity onPress={() => openProfile(item.profileUrl)} style={styles.profileButton}>
                                <Text style={{ color: 'white' }}>View Profile</Text>
                            </TouchableOpacity>
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
        height: 600,
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
        marginTop: 10,
        alignItems: 'center',
        fontSize: 24,
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
    },
    profileButton: {
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10
    }
})