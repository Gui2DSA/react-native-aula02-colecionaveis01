import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import estiloContato from './estiloContato';

function Contato({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');

    const enviar = () => {
        if (nome == '' || numero == '') {
            Alert.alert(
                'Preenchimento obrigatório!',
                'Informe o nome e o numero para contato!',
                [
                    { text: 'OK' },
                ],
            );
        } else {
            navigation.replace('Inicial', {contato: nome});
        }
    }

    return (

        <View style={estiloContato.container}>
            <View style={estiloContato.borda}>

                <Text style={estiloContato.titulo}>Contato</Text>

                <Text style={estiloContato.texto}> Caso você queira entrar em contato conosco para relatar mals tratos á
                animais, ou para saber mais sobre como cuidar do seu bichiho, ou para saber onde e como adotar um, entre 
                em contato conosco através do nosso e-mail ou pelo nosso número de telefone:</Text>

                <Text style={estiloContato.texto}> e-mail: salvaPETS@gmail.com </Text>

                <Text style={estiloContato.texto}> telefone: (+55) 21 94876-8003 </Text>

                <Text style={estiloContato.texto}>Ou se você preferir, deixe seu nome, número e e-mail abaixo para entrar-mos em
                contato com você nas próximas 24 horas. Agradecemos desde já pela colaboração!</Text>
    
            <TextInput
                style={estiloContato.campo}
                placeholder="Insira o seu nome:"
                onChangeText={nome => setNome(nome)}
                value={nome}
            />
            <TextInput
                style={estiloContato.campo}
                placeholder="Insira o seu telefone para contato:"
                onChangeText={numero => setNumero(numero)}
                value={numero}
            />
            <TextInput
                style={estiloContato.campo}
                placeholder="Insira o seu e-mail para contato:"
                onChangeText={email => setEmail(email)}
                value={email}
            />

                <TouchableOpacity style={estiloContato.botaoContainer} onPress={voltar}>
                    <Text style={estiloContato.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloContato.botaoContainer} onPress={enviar}>
                    <Text style={estiloContato.botaoTexto}>Enviar</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}
export default Contato;