import Exemplo01Fetch from "./components/Exemplo01FetchSemComentarios";
import Exemplo02Tratamento from "./components/Exemplo02TratamentoSemComentarios";
import Exemplo03VariosItens from "./components/Exemplo03VariosItensSemComentarios";
import Atv04TratarErrosMuitos from "./componente/Atv04TratarErrosMuitos";
import Atv03TratarErrosDeUm from "/componente/Atv03TratarErrosDeUm";
import Atv02MuitosItens from "/componente/Atv02MuitosItens";
import Atv01UmItem from "/componente/Atv01UmItem";

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
      <Atv04TratarErrosMuitos/>
      <Atv01UmItem/>
      <Atv03TratarErrosDeUm/>
      <Atv02MuitosItens/>
    </div>
  );
}
