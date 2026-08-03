import Atv01UmItem from "./components/Atv01UmItem";
import Atv02MuitosItens from "./components/Atv02MuitosItens";
import Atv03TratarErrosDeUm from "./components/Atv03TratarErrosDeUm";

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
// é muito lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.   
export default function App() {
  return (
    <div style={styles.container}>
      <Atv01UmItem />
      <Atv02MuitosItens />
      <Atv03TratarErrosDeUm />
    </div>
  );
}
