import Exemplo01Fetch from "./components/Exemplo01FetchSemComentarios";
import Exemplo02Tratamento from "./components/Exemplo02TratamentoSemComentarios";
import Exemplo03VariosItens from "./components/Exemplo03VariosItensSemComentarios";
import Atv01UmItem from "./components/Atv01UmItem";
import Atv02MuitosItens from "./components/Atv02MuitosItens";
import Atv03TratarErrosDeUm from "./components/Atv03TratarErrosDeUm";
import Atv04TratarErrosDeMuitos from "./components/Atv04TratarErrosDeMuitos";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#eec",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#101015"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <Exemplo01Fetch/>
      <Exemplo02Tratamento/>
      <Exemplo03VariosItens/>
      <Atv01UmItem/>
      <Atv02MuitosItens/>
      <Atv03TratarErrosDeUm/>
      <Atv04TratarErrosDeMuitos/>
    </div>
  );
}
