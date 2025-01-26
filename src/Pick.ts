// he Pick utility type in TypeScript is a powerful feature that allows 
// you to construct new types by selecting a subset of properties from an existing type
// work with only certain fields of a complex type,
// Pick<Type, Keys>
// - `Type`: The original type you want to pick properties from.
// - `Keys`: The keys (property names) you want to pick from the `Type`
// Original User interface
interface UserPick {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // Creating a new type with only `name` and `email` properties from `UserPick`
  type UserProfile = Pick<UserPick, 'name' | 'email'>;
  
  // Function to display user profile
  const displayUserProfile = (user: UserProfile): void => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
  
  // Example Usage
  const fullUser: UserPick = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: new Date('2023-01-01'),
  };
  
  // Creating a `UserProfile` object by extracting only the required properties
  const userProfile: UserProfile = {
    name: fullUser.name,
    email: fullUser.email,
  };
  
  // Passing the `UserProfile` object to the function
  displayUserProfile(userProfile);
  