import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthenticationForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Spacer>
        <Spacer>
          <Text h3>{headerText}</Text>
        </Spacer>
        <Spacer>
          <Input
            label='email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Input
            secureTextEntry
            label='password'
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
            autoCorrect={false}
          />
          {errorMessage ? (<Text style={styles.error}>{errorMessage}</Text>) : null}
        </Spacer>
        <View style={styles.signupButton}>
          <Button
            title={submitButtonText}
            onPress={() => onSubmit({ email, password })}
          />
        </View>
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  signupButton: { marginHorizontal: 20 },
  error: {
    fontSize: 16,
    color: 'red'
  },
  container: {
    justifyContent: 'center'
  }
})

export default AuthenticationForm
