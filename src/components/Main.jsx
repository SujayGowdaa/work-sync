import Preview from './Preview';
import EmployeeLists from './EmployeeLists';
import NewCandidate from './NewCandidate';

const Main = () => {
  return (
    <main className=' flex gap-6 '>
      <EmployeeLists />
      <Preview />
      {/* <NewCandidate /> */}
    </main>
  );
};

export default Main;
