export interface userModel {
  id: string;
  username: string;
  password: string;
  email: string;
  image: string;
  is_chef: boolean;
  chef_available_times: string;
  chef_dish: {
    id: string;
    dish_name:string;
    dish_image:string;
  };

}
