import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'string',
    username: 'string',
    email: 'string',
    phone: 'string',
    gender: 'string',
    address: 'string',
    image: 'string', // Path to the image
  },
  primaryKey: 'id',
};

const realm = new Realm({ schema: [UserSchema] });

export default realm;
