import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function inicial({ navigation }) {

    const abrirAdotar = () => {
        navigation.navigate('adotar')
    }

    const abrirDoar = () => {
        navigation.navigate('doar')
    }
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.titulo}>Olá, bem vindo!</Text>

                <Text style={estiloInicial.texto}> Aqui você vai encontrar algumas instruções sobre como adotar um pet
                 e o que você deve fazer caso queira doar um, lembre-se, animais são muito sensíveis e delicados, por 
                 isso merecem toda a atenção e cuidado. </Text>

                 <Text style={estiloInicial.texto}>Hoje mais de centenas de animais em todo o Brasil são abandonados na rua, 
                 ou sofrem mals tratos pelos seus donos, e existe apenas uma maneira de mudar isso, você fazendo a diferença !
                 Venha e conheça o PETS e adote ou doe um animal.</Text>

                 <Text style={estiloInicial.texto}>Escolha: Adotar ou Doar </Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirAdotar}>
                    <Text style={estiloInicial.botaoTexto}>Adotar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirDoar}>
                    <Text style={estiloInicial.botaoTexto}>Doar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default inicial;