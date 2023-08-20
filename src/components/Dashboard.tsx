import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../UserProvider';

import Table from './Table';
import Checkdata from './Checkdata';
import { FetchDataModel } from '../model';

interface UserDataResponse {
  data: FetchDataModel[];
}

const Dashboard: React.FC = () => {
  const { setOpen } = useContext(MyContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState<FetchDataModel[]>([]);

  useEffect(() => {
    const userData: string | null = localStorage.getItem('userData');
    if (!userData) {
      setOpen(true);
      navigate('/');
      return;
    }

    axios.get<UserDataResponse>('https://dummy-users.onrender.com/users')
      .then(response => {
        const fetchedData: FetchDataModel[] = response.data.data;
        setUsers(fetchedData);
        
      })
      .catch(error => {
        console.log('Error fetching data:', error.message);
      });
  }, []);

  return (
    <div>
      <Table users={users} />
      <Checkdata />
    </div>
  )
}

export default Dashboard;