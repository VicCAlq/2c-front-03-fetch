import Exemplo01Fetch from "./components/Exemplo01FetchSemComentarios";
import Exemplo02Tratamento from "./components/Exemplo02TratamentoSemComentarios";
import Exemplo03VariosItens from "./components/Exemplo03VariosItensSemComentarios";

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
    </div>
  );
}
