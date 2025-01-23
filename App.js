//importaçao dos componentes que serão usados na aplicação
import { SafeAreaView, Text, StyleSheet, Image,ScrollView } from 'react-native';
//inicio da aplicação com abertura do codigo 
export default function App() {
  //return = exibição na pagina
  return (
    <SafeAreaView style={estilo.container}>
    //textos da aplicação
      <Text style={estilo.titulo}> Cidades Para Conhecer </Text>
      <Text style={estilo.frase}>
        O Mundo Espera por Você: Cidades para Desbravar{' '}
      </Text>
<ScrollView>
      <Text style={estilo.tituloParis}>Istanbul - Turquia</Text>
      //impostação das imagens
 <Image style={estilo.img} source={require('./assets/istanbul.jpg')} />
      <Text style={estilo.tituloParis}> NY - Estados Unidos</Text>
      <Image style={estilo.img} source={require('./assets/NY.jpg')} />
      <Text style={estilo.tituloParis}> Paris - França</Text>
      <Image style={estilo.img} source={require('./assets/paris.jpg')} />
      <Text style={estilo.tituloParis}> Roma - Italia</Text>
      <Image style={estilo.img} source={require('./assets/roma.jpg')} />
     </ScrollView>
    </SafeAreaView> // primeiro e ultimo dentro do return para criar a tela de exibiçao 
  );
}
//abertura de constante para inicio do css
// abertura de constante com a criação de variavel "ex: ESTILO"
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor : '#00bff',
    justifyContent: 'center',
  },
  titulo: {
    marginTop:50,
    frontsize: 30,
    color: '#0000CD',
  },
  frase: {
    frontsize: 20,
    color: '#0000CD',
  },
  tituloParis: { 
    fontSize: 15,
    color:'#0000CD',
  },
  img: {
    width: 300,
    height: 200,
  },
});
