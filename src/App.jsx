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
			<h1>Atividades para N1</h1>

			<h2>Atividade 01</h2>
			<Atv01UmItem />

			<h2>Atividade 02</h2>
			<Atv02MuitosItens />

			<h2>Atividade 03</h2>
			<Atv03TratarErrosDeUm />

			<h2>Atividade 04</h2>
			<Atv04TratarErrosDeMuitos />
		</div>
	);
}
