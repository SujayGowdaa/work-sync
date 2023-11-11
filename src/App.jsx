import Main from './components/Main';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className=' flex flex-col max-w-[1440px] rounded-xl bg-LightGrey mx-auto p-12 gap-6'>
      <Navbar />
      <Main />
    </div>
  );
}
