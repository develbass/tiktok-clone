import { View, Text, StyleSheet } from "react-native";

export function Inbox(){
    return (
        <View style={styles.container}>
            <Text>Página Inbox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})