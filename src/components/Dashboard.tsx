import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../UserProvider';

import Table from './Table';
import { FetchData } from '../model';

interface UserDataResponse {
  data: FetchData[];
}

const Dashboard: React.FC = () => {
  const { setOpen } = useContext(MyContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState<FetchData[]>([]);

  useEffect(() => {
    const userData: string | null = localStorage.getItem('userData');
    if (!userData) {
      setOpen(true);
      navigate('/');
      return;
    }

    axios.get<UserDataResponse>('https://dummy-users.onrender.com/users')
      .then(response => {
        const fetchedData: FetchData[] = response.data.data;
        setUsers(fetchedData);
        
      })
      .catch(error => {
        console.log('Error fetching data:', error.message);
      });
  }, []);

  return (
    <div>
      <Table users={users} />
    </div>
  )
}

export default Dashboard;