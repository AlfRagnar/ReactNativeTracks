import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthenticationForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/authContext'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />

      <AuthenticationForm
        headerText='Sign in to Your Account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        text="Don't Have an Account yet? Sign up today!"
        routeName='SignUserUp'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})

export default SigninScreen
