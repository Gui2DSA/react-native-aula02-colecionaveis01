import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDoar from './estiloDoar';

function doar({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    
    return (
        <View style={estiloDoar.container}>
            <View style={estiloDoar.borda}>

                <Text style={estiloDoar.titulo}>Doar</Text>

                <Text style={estiloDoar.texto}>O abandono de animais de estimação é uma realidade que se acentua em 
                momentos de crise ou mesmo durante as férias, quando a família viaja. Ao invés de deixar o seu cão ou 
                gato à própria sorte, aprenda como doá-lo com carinho e responsabilidade.</Text>

                <Text style={estiloDoar.texto}>Dos 32 milhões de cães existentes no Brasil, 10% são abandonados. De 
                acordo com o Art. 32, capitulo V da Lei 9.605/98, abandonar animais à própria sorte é crime!</Text>

                <Text style={estiloDoar.texto}>Pense num amigo que já tenha um cão ou gato: pode ser que ali exista espaço 
                para mais um! Além disso, você tem a certeza de que seu bichinho será bem tratado. Se algum conhecido 
                indicar alguém que possa se interessar, visite a casa do candidato. Converse com ele, observe se o local possui 
                estrutura para que o seu bichinho viva com segurança. </Text>

                <Text style={estiloDoar.texto}>Se nada disso funcionar, inicie uma campanha pela internet. Vale todas as 
                redes sociais em que você está inscrito: postagem no Facebook, uma foto bem fofa no Instagram e no Twitter, 
                em blogs… peça para seus amigos compartilharem ao máximo. Caso o seu cachorro ou felino seja de raça, fale 
                com associações de criadores. Eles poderão ser ótimos intermediadores. Procure saber sobre possíveis feiras 
                de doações de animais na sua cidade.</Text>

                <Text style={estiloDoar.texto}>Abrigos não são uma opção desejável: eles costumam estar lotados de animais e 
                possuem pouquíssimos recursos para cuidar deles. Além de tristes, os animais que habitam os abrigos ficam 
                sempre sob risco de adoecerem.
                Sem contar que, por isso, cada vez menos pessoas visitam esses lugares na hora de adotar um animal.</Text>

                <TouchableOpacity style={estiloDoar.botaoContainer} onPress={voltar}>
                    <Text style={estiloDoar.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default doar;