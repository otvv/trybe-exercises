#ifdef TRYBE_SECOND_HPP
#define TRYBE_SECOND_HPP

#include <iostream>
#include <vector>

// multiplo de 3 (M.M.C)
std::vector<int> multiple_of_thirds(const std::vector<int> _chances) {

  // _result está como 'static' pois não iremos usar esta variavel fora do escopo atual 
  // e não precisamos declarar uma nova sempre que a função for chamada novamente, temos que economizar memória e processamento
  static std::vector<int> _result = {};

  // loop está iteragindo com o container (array) "_chances" e irá "loopar" 
  // até o valor de 'i' (index) atingir tamanho atual do container
  for (int i = 0; i < _chances.size(); i++)
  { 
    // estamos populando o container com o resultado do multiplo de 3 
    // a equação vai ser feita na hora (runtime)
    //
    // "at()"" é a posição do 'i' (index) no loop, ou seja a interação dele com o array ("_chances") 
    // em outras palavras é a onde ele "está andando" dentro do array
    // 
    // multiplicamos por 3 cada valor do array em que o loop está interagindo
    // assim enchendo o container com os multiplos de 3
    _result.push_back((_chances.at(i) * 3));
  }
  
  // DEBUG PURPOSES ONLY
  for (auto result_to_print : _result) 
  {
    std::cout << result_to_print << std::endl;
  }

  // retornamos o resultado
  return _result;
}

int main() {

  // const ref pois só estaremos lendo o valor deste container
  const std::vector<int> &_chances = {2, 3, 4, 5, 6, 7, 8};

  multiple_of_thirds(_chances);

  return 0;
}

#endif // TRYBE_SECOND_HPP
