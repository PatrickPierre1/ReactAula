import styles from "./styles/global.module.css";
import { NewComponent } from './components/NewComponent';

function App() {

  return (
    <>
      <h1 className={styles.title}>Hello world</h1>
      <NewComponent/>
    </>
  )
}
export default App
