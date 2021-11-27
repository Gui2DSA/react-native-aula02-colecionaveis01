import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#000000'
    },
    borda: {
        backgroundColor: '#556b2f',
        width: '80%',
        height: '63%',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'black',
        fontStyle: 'italic',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});
export default estiloInicial;