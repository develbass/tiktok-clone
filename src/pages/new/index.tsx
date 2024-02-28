import { View, Text, StyleSheet } from "react-native";

export function New(){
    return (
        <View style={styles.container}>
            <Text>Página New</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})