import React,{createContext,useState,ReactNode} from 'react';

interface Value{
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

type UserProps={
  children:ReactNode;
}

export const MyContext=createContext<Value>({
  open:false,
  setOpen:()=>{}
});

const UserProvider:React.FC<UserProps> = ({children}) => {
    const [open,setOpen]=useState<boolean>(false);
  return (
    <MyContext.Provider value={{open,setOpen}} >{children}</MyContext.Provider>
  )
}

export default UserProvider;