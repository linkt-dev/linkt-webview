import { useEffect, useState } from 'react';
import { createUser } from '@/api/user';
import { USER } from '@/constants/StorageData';
import { browserStorage } from '@/utils/browserStorage';
import { checkAuth } from '@/api/auth';
import manageUuid from '@/utils/uuid';

const useAuth = () => {
  const { uuid, isNew } = manageUuid();
  const [isUser, setIsUser] = useState(false);

  const login = async () => {
    try {
      await checkAuth();
      setIsUser(true);
    } catch (e) {
      alert(e);
    }
  };

  const createNewUser = async (uuid: string) => {
    try {
      const newUser = await createUser(uuid);
      browserStorage.storeData(USER, newUser);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    if (!isNew) {
      login();
      return;
    }
    createNewUser(uuid);
  }, [uuid, isNew]);

  return isUser;
};

export default useAuth;
