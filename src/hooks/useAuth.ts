import { checkAuth } from '@/api/auth';
import { createUser } from '@/api/user';
import { EXPO_PUSH_TOKEN, USER } from '@/constants/StorageData';
import { browserStorage } from '@/utils/browserStorage';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isUser, setIsUser] = useState(false);

  const login = async () => {
    try {
      const loginResult = await checkAuth(browserStorage.getData(USER)!);
      if (loginResult) {
        setIsUser(true);
      }
    } catch (e) {
      alert(e);
    }
  };

  const createNewUser = async () => {
    try {
      const newUuid = uuidv4().toString();
      const expoPushToken = sessionStorage.getItem(EXPO_PUSH_TOKEN)!;
      alert(expoPushToken);
      const { userId } = await createUser(newUuid, expoPushToken);

      if (userId) {
        browserStorage.storeData(USER, userId);
        login();
        setIsUser(true);
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const isUser = browserStorage.getData(USER);

    if (isUser) {
      login();
      return;
    }

    createNewUser();
  }, []);

  return isUser;
};

export default useAuth;
