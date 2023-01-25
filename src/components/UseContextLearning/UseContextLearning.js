import '../../styles/App.css';
import FunctionalContextComponent from "./FunctionalContextComponent";
import {ThemeProvider} from "./ThemeContext";

function UseContextLearning () {

  return (
      <>
          <ThemeProvider>
              <FunctionalContextComponent/>
          </ThemeProvider>
      </>
      );
}

export default UseContextLearning;
