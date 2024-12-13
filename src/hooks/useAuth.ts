import { useEffect } from 'react';
import { createUser, User } from '@/api/user';
import { USER } from '@/constants/StorageData';
import { browserStorage } from '@/utils/browserStorage';
import { checkAuth } from '@/api/auth';
import manageUuid from '@/utils/uuid';

const useAuth = () => {
  const { uuid, isNew } = manageUuid();

  const setAccessToken = (accessToken: string) => {
    browserStorage.storeData('accessToken', accessToken);
  };

  const login = async () => {
    try {
      const user = browserStorage.getData<User>(USER);
      if (user) {
        const { accessToken } = await checkAuth(user.userId!);
        setAccessToken(accessToken);
      }
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
};

export default useAuth;
