import { UUID } from '@/constants/StorageData';
import { browserStorage } from '@/utils/browserStorage';
import { v4 as uuidv4 } from 'uuid';

const manageUuid = () => {
  let uuid = '';
  const ogUuid = browserStorage.getData<string>(UUID);
  const isNew = typeof ogUuid !== 'string' || ogUuid === '';

  const crateNewUuid = () => {
    const newUuid = uuidv4().toString();
    browserStorage.storeData(UUID, newUuid);

    return newUuid;
  };

  if (isNew) {
    const newUuid = crateNewUuid();
    uuid = newUuid;
  } else {
    uuid = ogUuid!;
  }

  return { uuid, isNew };
};

export default manageUuid;
