import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
    FlatList,
    Dimensions
} from "react-native";
import { FeedItem } from '../../components/FeedItem'
import { useRef, useState } from "react";

const { height: heightScreen } = Dimensions.get("screen")

export function Home() {

    let feedItems = [
        {
            id: '1',
            video: 'https://imgur.com/tiVDBNu.mp4',
            name: '@nature',
            description: 'Um lugar incrível e encantador, viva a natureza.',
        },
        {
            id: '2',
            video: 'https://imgur.com/bAiwKjz.mp4',
            name: '@fantastic',
            description: 'O Senho é meu pastor e nada me faltará.',
        },
        {
            id: '3',
            video: 'https://imgur.com/wAxtE0W.mp4',
            name: '@awesomenature',
            description: 'Paz e amor.',
        }
    ]
    const [showItem, setShowItem] = useState(feedItems[0])

    const onViewRef = useRef((viewableItems: any) => {
        if (viewableItems && viewableItems.viewableItems.length > 0) {
            setShowItem(feedItems[viewableItems.viewableItems[0].index])
        }
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.labels}>
                    <TouchableOpacity>
                        <Text style={[styles.labelText, { color: "#ddd" }]}>Seguindo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={[styles.labelText, { color: "#fff" }]}>Seguindo</Text>
                        <View style={styles.indicator}></View>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={feedItems}
                    renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
                    onViewableItemsChanged={onViewRef.current}
                    snapToAlignment="center"
                    snapToInterval={heightScreen}
                    scrollEventThrottle={200}
                    decelerationRate={"fast"}
                    viewabilityConfig={{
                        waitForInteraction: false,
                        viewAreaCoveragePercentThreshold: 100,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
        zIndex: 99
    },
    labelText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4
    },
    indicator: {
        backgroundColor: "#fff",
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
})