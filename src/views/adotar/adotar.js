import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloAdotar from './estiloAdotar';

function adotar({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    
    return (
        <View style={estiloAdotar.container}>
            <View style={estiloAdotar.borda}>

                <Text style={estiloAdotar.titulo}>Adotar</Text>

                <Text style={estiloAdotar.texto}>Uma vez que a família esteja de acordo, é hora de encontrar o animal certo.
                Não basta pegar o primeiro que encontrar na rua, você tem que 'namorar' o animal
                e ver se ele também gosta de você. A busca pode começar pelo CCZ da sua cidade ou estado, ou em ONGs 
                locais, que possuem animais em seus abrigos. Manaus, Cuiabá, Curitiba, Belo Horizonte e Florianópolis são 
                algumas das localidades em que os centros são muito procurados por pessoas interessadas em um animal de
                estimação.</Text>

                <Text style={estiloAdotar.texto}>O adotante precisa ser maior de 21 anos, apresentar RG, CPF, comprovante de 
                residência recente assinar um termo se comprometendo a cuidar do animalzinho, que agora passa a ser de responsabilidade 
                dele. No CCZ de São Paulo, é preciso pagar uma taxa de R$ 16,20, pois o trâmite inclui a carteirinha do RGA 
                (Registro Geral do Animal), uma plaqueta e um microship de identificação. É necessário levar guia (para cães) ou caixa 
                de transporte (para gatos).</Text>

                <Text style={estiloAdotar.texto}>Um cão ou gato vai viver com a família, no mínimo, pelos próximo dez anos. 
                Animais de estimação requerem tempo, atenção e gera despesas com alimentação, saúde, higiene e lazer, tudo 
                isso deve ser colocado na balança antes de tomar a decisão.</Text>

                <TouchableOpacity style={estiloAdotar.botaoContainer} onPress={voltar}>
                    <Text style={estiloAdotar.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default adotar;