import Main from './components/Main';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className=' flex flex-col min-w-[1440px] min-h-[1024px]  rounded-xl bg-LightGrey mx-auto p-12 gap-6 mx-auto'>
      <Navbar />
      <Main />
    </div>
  );
}
