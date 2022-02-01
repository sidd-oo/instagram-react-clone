import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Timeline from '../components/Timeline';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div>
      <Header />
      <Timeline />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
