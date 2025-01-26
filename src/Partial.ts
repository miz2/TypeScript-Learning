// The Partial utility type in TypeScript is used to create a new type by making all properties of an existing type optional. 
// This is particularly useful when you want to update a subset of an 
// object's properties without needing to provide the entire object
interface UserPartial {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
type UpdateProps = Pick<UserPartial, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

const updateUser = (id: string, updates: UpdatePropsOptional): void => {
    console.log(`Updating user with ID: ${id}`);
    console.log('Updates:', updates);
  };
  const userUpdates: UpdatePropsOptional = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  
  updateUser('123', userUpdates);
  
  // Another example with partial updates
  const partialUpdates: UpdatePropsOptional = {
    age: '30',
  };
  
  updateUser('124', partialUpdates);