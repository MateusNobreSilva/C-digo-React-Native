   
funcaoLoga(){

var DadosDaAPI;

    fetch("http://SEUIP/API.php?user='mateus'&senha='123'")
      .then(response => response.json())
      .then(data => DadosDaAPI = console.warn("Resultado data: ", data))
      .done();

    // Alert.alert("Este é JSON:" + JSON.stringify(minha));

    Alert.alert("Resultado: ", DadosDaAPI);
    console.warn("Aqui está o dado:", DadosDaAPI);

}

