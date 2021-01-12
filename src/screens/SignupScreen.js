import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Spacer>
                    <Spacer>
                        <Text h3>Sign up for Tracker</Text>
                    </Spacer>

                    <Spacer>
                        <Input
                            style={styles.input}
                            label="email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            secureTextEntry
                            style={styles.input}
                            label="password"
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </Spacer>
                    <View style={styles.signupButton}>
                        <Button title="Sign Up" />
                    </View>
                </Spacer>
            </View>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        marginTop: 50,
    },
    input: {},
    signupButton: { marginHorizontal: 20 },
});

export default SignupScreen;
