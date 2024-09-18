import React, { createContext, useContext, useState } from 'react';

type ContextProps = {
  children: React.ReactNode;
};

interface Data {
  parentName: string;
  kidName: string;
  kidAge: number;
  //   categories: { [key: string]: string };
  //   toySelected:
  //   Filters:
}

type UserContextValue = {
  data: Partial<Data>;
  updateData: (update: Partial<Data>) => void;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used inside a UserProvider');

  return context;
};

export const UserProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<Partial<Data>>({});

  const updateData = (update: Partial<Data>) => {
    setData((data) => ({ ...data, ...update }));
  };

  console.log({ data });

  return (
    <UserContext.Provider value={{ data, updateData }}>
      {children}
    </UserContext.Provider>
  );
};
