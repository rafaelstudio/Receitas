import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList } from 'react-native'

import ReceitaItem from './ReceitaItem';

export default class Lista extends Component {

  static navigationOptions = {
    title:'App de Receitas'
  };


  constructor(props){
    super(props)
    this.state = {
      list:[
        {
          key:'123',
          nome:"PÃO DE MEL MACIO",
          por:'Juliana Guermandi Caride',
          descricao:'Pao de mel muito macio',
          rendimento:50,
          preparo:60 ,
          imagem:'https://img.itdg.com.br/tdg/images/recipes/000/115/197/116876/116876_original.jpg?mode=crop&width=710&height=400',
          ingrediente:[
            '4 ovos inteiros',
            '1 xícara (chá) de mel ou favinho',
            '1 xícara (chá) de açúcar mascavo',
            '1/2 xícara (chá) de chocolate em pó',
            '1 colher (chá) de canela em pó',
            '1 colher (chá) de cravo em pó',
            '2 colheres (sopa) cheias de manteiga ou margarina',
            '2 xícaras (chá) de leite',
            '4 xícaras (chá) de farinha de trigo',
            '2 colheres (chá) de bicarbonato de sódio',
            '2 colheres (chá) de fermento em pó',
            '1 kg de chocolate fracionado para banhar'
                      ],
           modo:[
            'Primeiramente, bata muito bem os ovos na batedeira, até ficar bem espumoso e amarelo claro.',
            'Depois, adicione o mel, o açúcar, o chocolate, o cravo, a canela, a margarina, o leite e a farinha.Bata muito bem até ficar uma massa totalmente homogênea.',
            'Por último, adicione o bicarbonato e o fermento e misture a massa à mão, até ficar completamente misturada e homogênea (este é o segredo para a massa além de crescer, não murchar).',
            'Preaqueça o forno a 180ºC antes de começar a encher as forminhas previamente untadas com margarina ou manteiga.',
            'Asse por aproximadamente 25 minutos, na mesma temperatura.',
            'Corte todos os pãezinhos ao meio e recheie com o sabor de sua preferência.',
            'Banhe-os no chocolate, espere secar bem e embale-os.',
            'Essa receita pode ser vendida a R$ 2,50 cada pãozinho.'
           ]           
        },
        {
          key:'321',
          nome:"BOLO DE BANANA FOFINHO",
          por:'Equipe Tudo Gostoso',
          descricao:'Bolo de Banana Macio',
          rendimento:16  ,
          preparo:45  ,
          imagem:'https://img.itdg.com.br/tdg/images/recipes/000/188/774/268243/268243_original.jpg?mode=crop&width=710&height=400',
          ingrediente:[
           ' 1/2 xícara (chá) de leite',
           ' 1 xícara (chá) de óleo',
           ' 1 xícara (chá) de açúcar',
            '3 ovos',
            '2 bananas nanica médias picadas',
            '2 xícaras (chá) de farinha de trigo',
           ' 1 xícara (chá) de amido de milho MAIZENA',
            '1 colher (sopa) de fermento em pó'

          ],
          modo:[
            'Bata no liquidificador o leite, o óleo, o açúcar e os ovos até que fique homogêneo e cremoso.',
            'Junte as bananas e bata até triturar levemente.',
           ' Peneire o trigo, a MAIZENA e o fermento, passe para uma tigela e adicione aos poucos a mistura até obter uma massa cremosa e homogênea.',
           ' Coloque a massa em uma forma redonda com furo central (20 cm de diâmetro) untada e enfarinhada, polvilhe com o açúcar e a canela e leve ao forno preaquecido em temperatura média (180°C) por 40 minutos ou até que um palito saia limpo, depois de espetado na massa.',
            'Espere amornar e desenforme.'
          ]
        }
      ]

    };
    this.clicou = this.clicou.bind(this);
  }

  clicou(item){
    //Passa para a tela "receita" com os item de parametro
    this.props.navigation.navigate('Receita', item);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.state.list}
            //tem que faze a funcao anonima para chamar o item no outro navegador
            renderItem={({item})=> <ReceitaItem data={item} onPress={()=>{
              this.clicou(item);
            }} />}

        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
