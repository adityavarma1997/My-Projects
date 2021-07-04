import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import LessonPlan from './components/LessonPlan/lessonPlan';
import Students from './components/Students/students';
import Settings from './components/Settings/settings';


function App() {
  return (
  
    <main>
      <NavBar />
      <Switch>
        <Route path="/students" component={Students} exact/>
        <Route path="/lessonPath" component={LessonPlan} exact/>
        <Route path="/settings" component={Settings} exact/>
      </Switch>
    </main> 
  );
}

export default App;
