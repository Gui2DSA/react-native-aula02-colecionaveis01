import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import estiloLogin from './estiloLogin';

function Login ({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
                'Preenchimento obrigatório!',
                'Informe o login e a senha!',
                [
                    { text: 'OK' },
                ],
            );
        } else {
            navigation.replace('Inicial', {login: login});
        }
    }

    return (
        <View style={estiloLogin.container}>
        <View style={estiloLogin.borda}>
    
            <Text style={estiloLogin.texto}>PETS</Text>

            <Text style={estiloLogin.texto}>Está pensando em adotar ou doar um animalzinho? Você está no lugar certo,
            cadastre-se no app e saiba mais sobre os procedimentos!</Text>
    
            <TextInput
                style={estiloLogin.campo}
                placeholder="Login"
                onChangeText={login => setLogin(login)}
                value={login}
            />
            <TextInput
                style={estiloLogin.campo}
                placeholder="Senha"
                onChangeText={senha => setSenha(senha)}
                value={senha}
            />
    
            <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                <Text style={estiloLogin.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Login;